import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        await connect()
        const users = await User.find()
        return new NextResponse(JSON.stringify(users), { status: 200 })

    } catch (err) {
        return new NextResponse('User Fetch Problrms', { status: 500 })
    }
}

export const POST = async (request) => {

    const body = await request.json()

    const newUser = new User(body)

    try {
        await connect()
        await newUser.save()
        return new NextResponse("User has been created", { status: 201 });

    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}
