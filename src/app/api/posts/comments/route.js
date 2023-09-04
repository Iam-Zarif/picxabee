import useAuth from '@/hooks/useAuth';
import Post from '@/models/Post';
import connect from '@/utils/db';
import mongoose from 'mongoose';
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
