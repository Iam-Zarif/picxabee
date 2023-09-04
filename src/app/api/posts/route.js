import useAuth from '@/hooks/useAuth';
import Post from '@/models/Post';
import connect from '@/utils/db';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		await connect();
		const posts = await Post.find();

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};

export async function POST(request) {
	try {
		const post = await request.json();
		await connect();
		await Post.create(post);
		return NextResponse.json({ message: 'Post Created' }, { status: 201 });
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
}

//nishat
export const DELETE = async (request) => {
	// const { id } = await request.json();
	try {
		const id = request.nextUrl.searchParams.get('id');
		await connect();
		await Post.findByIdAndDelete(id);
		return NextResponse.json({ message: 'Post deleted' }, { status: 200 });
	} catch (error) {
		JSON.stringify({ message: 'Internal server error' }, { status: 500 });
	}
};


export const PATCH = async (request) => {
	try {
		const newReaction = await request.json();
		console.log(newReaction)
		const { id: postId, author } = newReaction;
		const { email: userEmail} = author;
	console.log(userEmail)


		await connect();

		let updatedPost;

		if (postId && userEmail) {
			// Check if the user has already liked the post
			const post = await Post.findById(postId);

			if (!post) {
				return new NextResponse(
					JSON.stringify({ message: 'Post not found' }, { status: 404 })
				);
			}

		const hasLiked = post.reactions.some(
			(reaction) => reaction.author.email === userEmail
		);
		console.log(hasLiked);


			if (hasLiked) {
				// User has already liked the post, so unlike it
				post.reactions = post.reactions.filter(
					(reaction) => reaction.author.email !== userEmail
				);
			} else {
				// User hasn't liked the post, so like it
				post.reactions.push({ author: author });
			}

			// Save the updated post
			updatedPost = await post.save();
		} else {
			return new NextResponse.json(
				{ message: 'Invalid request' },
				{ status: 400 }
			);
		}

		if (!updatedPost) {
			revalidateTag(Post);
			return new NextResponse(
				JSON.stringify({ message: 'Post not found' }, { status: 404 })
			);
		}

		return new NextResponse(
			JSON.stringify(
				{ message: 'Operation successful', updatedPost },
				{ status: 200 }
			)
		);
	} catch (error) {
		console.log(error.name, error.message);
		return new NextResponse(
			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
		);
	}
};
