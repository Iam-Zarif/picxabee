import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        await connect()
        const posts = await Post.find() 

        const postContent = posts.map(post => post.content)

        const hashtagRegex = /#[a-zA-Z0-9_]+(?=\s)/g
        const totalHashtags = postContent && JSON.stringify(postContent).match(hashtagRegex);

        const hashtagCounts = {};

        if (totalHashtags) {
            for (const hashtag of totalHashtags) {

                if (hashtagCounts[hashtag]) {
                    hashtagCounts[hashtag]++
                } else {
                    hashtagCounts[hashtag] = 1
                }
            }
        }

        const hashtagArray = Object.keys(hashtagCounts).map((hashtag) => {
            return { hashtag, count: hashtagCounts[hashtag] };
        });

        // Finally Trending Hastag Array is here
        const hastags = hashtagArray.sort((a, b) => b.count - a.count);

        return new NextResponse(JSON.stringify(hastags.slice(0, 10)), { status: 200 })

    } catch (err) {
        return new NextResponse('trending Hashtag Fetch Problems', { status: 500 })
    }
}