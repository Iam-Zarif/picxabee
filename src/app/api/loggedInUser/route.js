import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const userEmail = request.nextUrl.searchParams.get("userEmail");
    await connect();
    const user = await User.findOne({ email: userEmail });
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error.name, error.message);
    return NextResponse.json({ error: error.message });
  }
};

// // Update LoggedIn UserInformation
// export const PUT = async (request) => {
//   try {
//     // const { newProfileInfo } = await request.json();
//     const userEmail = request.nextUrl.searchParams.get("userEmail");
//     await connect();
//     const user = await User.findByID();
// 	console.log(user);
//     user.information = {
//       school: "No School",
//       college: "NAI",
//       university: "NAI",
//       location: "NAI",
//       gender: "NAI",
//     };
//     await user.save();

// Update LoggedIn UserInformation
// Update LoggedIn UserInformation
export const PUT = async (request) => {
	try {
		const id = request.nextUrl.searchParams.get('id');
		const newProfileInfo = await request.json();
		const { name, bio, information } = newProfileInfo;
		await connect();
		await User.findByIdAndUpdate(id, { name, bio, information });
		return NextResponse.json(
			{ message: 'user information updated' },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};
