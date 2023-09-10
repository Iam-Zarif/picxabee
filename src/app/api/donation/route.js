import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// Get donation data

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find({ privacy: "donation" });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (request) => {
  try {
    const post = await request.json();
    await connect();
    await Post.create(post);
    return NextResponse.json({ message: "Donation created successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse({ message: error.message }, { status: error.status });
  }
};
