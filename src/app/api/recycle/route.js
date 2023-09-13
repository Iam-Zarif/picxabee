import Recycle from '@/models/Recycle'
import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {

    const email = request.nextUrl.searchParams.get('email');

    try {
        await connect()
        const recyclePost = await Recycle.find({ 'author.email': email })

        if (email) {
            return new NextResponse(JSON.stringify(recyclePost), { status: 201 });
        } else {
            return new NextResponse(JSON.stringify([]), { status: 201 });
        }
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const POST = async (request) => {

    const id = request.nextUrl.searchParams.get('id');

    try {
        await connect()
        const recylePost = await Post.findOne({ _id: id })
        const newRecylePost = new Recycle({

            author: {
                email: recylePost?.author?.email,
                name: recylePost?.author?.name,
                profile_picture: recylePost?.author?.profile_picture
            },
            content: recylePost?.content,
            image: recylePost?.image,
            privacy: recylePost?.privacy,
            reactions: recylePost?.reactions,
            comments: recylePost?.comments
        })

        await newRecylePost.save()
        return new NextResponse(JSON.stringify({ message: "post has been created inside recyle collection" }), { status: 201 });

    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const DELETE = async (request) => {

    const id = request.nextUrl.searchParams.get('id');

    try {
        await connect();
        await Recycle.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Post deleted' }, { status: 200 });

    } catch (error) {
        JSON.stringify({ message: 'Internal server error' }, { status: 500 });
    }
};