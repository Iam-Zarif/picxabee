import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
	try {
		await connect();
		const users = await User.find();
		return NextResponse.json(users);
	} catch (err) {
		return new NextResponse('User Fetch Problems', { status: 500 });
	}
};

