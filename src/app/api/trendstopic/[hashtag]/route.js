import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {

    let { hashtag } = params
    hashtag = hashtag.slice(0, -1)

    console.log('hastag', hashtag);

    try {
        await connect()
        const posts = await Post.find({
            content: { $regex: `#${hashtag}`, $options: "i" }
        })

        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (err) {
        return new NextResponse('trending Hashtag Fetch Problems', { status: 500 })
    }
}