import Ad from '@/models/Ad';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
	try {
		await connect();
		const ads = await Ad.find({ status: 'approved' });
		return new NextResponse(JSON.stringify(ads), { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
};
