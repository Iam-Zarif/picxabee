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

// Update LoggedIn UserInformation
export const PUT = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const newProfileInfo = await request.json();

    // const coverPhoto
    const { cover_photo } = newProfileInfo;
    const { profile_picture } = newProfileInfo;

    if (cover_photo) {
      await connect();
      await User.findByIdAndUpdate(id, { cover_photo });
      return NextResponse.json({ message: "Cover Image Success" }, { status: 200 });
    } else if (profile_picture) {
      await connect();
      await User.findByIdAndUpdate(id, { profile_picture });
      return NextResponse.json({ message: "Profile Image Success" }, { status: 200 });
    } else {
      const { name, bio, information } = newProfileInfo;
      await connect();
      await User.findByIdAndUpdate(id, { name, bio, information });
      return NextResponse.json({ message: "user information updated" }, { status: 200 });
    }
  } catch (error) {
    console.log(error.name, error.message);
    return NextResponse.json({ error: error.message });
  }
};
