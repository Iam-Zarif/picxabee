import Donation from "@/models/Donation";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const statusNow = await request.json();
    await connect();
    const donations = await Donation.find({status: statusNow});
    return new NextResponse(JSON.stringify(donations), { status: 200 });
  } catch (error) {
    console.log(error.name, error.message);
    return NextResponse.json({ error: error.message });
  }
};


export const POST = async (request) => {
  try {
    const donationPost = await request.json();
    await connect();
    await Donation.create(donationPost);
    return NextResponse.json({ message: "Donation created successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: error.status });
  }
};
