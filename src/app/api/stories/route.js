import Story from "@/models/Story"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        await connect()
        const story = await Story.find()
        return new NextResponse(JSON.stringify(story), { status: 200 })

    } catch (err) {
        return new NextResponse('Story Fetch Problrms', { status: 500 })
    }
}

export const POST = async (request) => {

    const body = await request.json()
    // const newStory = new Story(body)

    try {
        await connect()
        await Story.create(body)
        return new NextResponse("Story has been created", { status: 201 });

    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}