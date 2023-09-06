import Post from '@/models/Post';
import connect from '@/utils/db';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';


export const PATCH = async (request) => {
	try {
		const newComment = await request.json();
		const { id, author, comment } = newComment;

		await connect();

		let updatedPost;

		if (newComment) {
			updatedPost = await Post.findByIdAndUpdate(
				id,
				{
					$push: {
						comments: {
							author: author,
							comment: comment,
						},
					},
				},
				{
					new: true,
				}
			);
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


export const DELETE = async (request) => {
	try {
		const postId = request.nextUrl.searchParams.get('postId');
		const commentId = request.nextUrl.searchParams.get('commentId');

		if (!postId || !commentId) {
			return NextResponse.json(
				{ message: 'Missing postId or commentId' },
				{ status: 400 }
			);
		}

		await connect();
		const post = await Post.findById(postId);

		if (!post) {
			return NextResponse.json({ message: 'Post not found' }, { status: 404 });
		}

		// Find the comment within the post and remove it
		const commentIndex = post.comments.findIndex(
			(comment) => comment._id.toString() === commentId
		);

		if (commentIndex === -1) {
			return NextResponse.json(
				{ message: 'Comment not found' },
				{ status: 404 }
			);
		}

		post.comments.splice(commentIndex, 1);
		await post.save();

		return NextResponse.json({ message: 'Comment deleted' }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		);
	}
};
