// uservisualization

import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async () => {

    try {

        await connect()
        const users = await User.find();

        const userCountByDate = {};

        users.forEach((post) => {
            const createdAt = new Date(post.createdAt);
            const dateKey = createdAt.toISOString().split('T')[0];

            if (userCountByDate[dateKey]) {
                userCountByDate[dateKey]++;
            } else {
                userCountByDate[dateKey] = 1;
            }
        });

        const userCountArray = Object.entries(userCountByDate).map(([date, count]) => ({
            date,
            count,
        }));

        return new NextResponse(JSON.stringify(userCountArray), { status: 200 })

    } catch (err) {
        return new NextResponse('User Fetch Problems', { status: 500 })
    }
}