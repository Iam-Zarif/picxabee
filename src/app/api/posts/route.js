import Post from "@/models/Post";
import connect from "@/utils/db";
import mongoose from "mongoose";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export async function POST(request) {
  try {
    const post = await request.json();
    await connect();
    await Post.create(post);
    return NextResponse.json({ message: "Post Created" }, { status: 201 });
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
		const { id, comment, reaction } = await request.json();
		await connect();

		let updatedPost;

		if (comment) {
			updatedPost = await Post.findByIdAndUpdate(
				id,
				{
					$push: {
						comments: {
							author: {
								email: 'tasnim@gmail.com',
								name: 'Nishat',
								profile_picture:
									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
							},
							comment,
						},
					},
				},
				{
					new: true,
				}
			);
		} else if (reaction) {
			updatedPost = await Post.findByIdAndUpdate(
				id,
				{
					$push: {
						reactions: {
							author: {
								email: 'tasnim@gmail.com',
								name: 'Nishat',
								profile_picture:
									'https://i.ibb.co/wz4Knkr/326458237-1340401556808776-5697246596607663538-n.jpg',
							},
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
		console.error(error);
		return new NextResponse(
			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
		);
	}
};
