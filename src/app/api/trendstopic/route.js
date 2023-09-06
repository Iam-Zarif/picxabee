import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        await connect()
        const posts = await Post.find() 

        const postContent = posts.map(post => post.content)

        const hashtagRegex = /#[a-zA-Z0-9_]+/g;
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
        return new NextResponse('trending Hashtag Fetch Problrms', { status: 500 })
    }
}

/*
const posts = [
  ];
  
  const postCountByDate = {};
  
  posts.forEach((post) => {
    const createdAt = new Date(post.createdAt); 
    const dateKey = createdAt.toISOString().split('T')[0]; 
  
    if (postCountByDate[dateKey]) {
      postCountByDate[dateKey]++;
    } else {
      postCountByDate[dateKey] = 1;
    }
  });
  
  const postCountArray = Object.entries(postCountByDate).map(([date, count]) => ({
    date,
    count,
  }));
  
  console.log(postCountArray);
  */