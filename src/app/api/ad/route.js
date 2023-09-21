import Ad from '@/models/Ad';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
	try {
		await connect();
		const ads = await Ad.find({status: "pending"});
		return new NextResponse(JSON.stringify(ads), { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
};

// Post for donation
export const POST = async (request) => {
	try {
		const adPost = await request.json();
        console.log(adPost)

		await connect();
		await Ad.create(adPost);
		return NextResponse.json(
			{ message: 'Ad created successfully' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: error.message },
			{ status: error.status }
		);
	}
};

// Update Donation Status
export const PATCH = async (request) => {
	
	try {
		const id = request.nextUrl.searchParams.get('id');
		console.log(id);
		const status = await request.json();
		await connect();
		await Ad.findByIdAndUpdate(id, status);

		return NextResponse.json(
			{ message: 'AdPost status updated' },
			{ status: 200 }
		);
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'failed to update' }, { status: 500 });
	}
};
