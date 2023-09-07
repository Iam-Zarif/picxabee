import Recycle from '@/models/Recycle'
import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {

    try {
        await connect()
        const recyclePost = await Recycle.find()
        return new NextResponse(JSON.stringify(recyclePost), { status: 201 });

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
            // content: 'Hello World',
            // image: 'nai'
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

        console.log(newRecylePost);

        await newRecylePost.save()  
        return new NextResponse(JSON.stringify({ message: "post has been created inside rycyle collection" }), { status: 201 });

    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}