import DBConnect from '@/services/DBConnects';
import { NextResponse } from 'next/server';

export async function GET(request) {
	try {
		const database = await DBConnect();
		const postCollection = database.collection('posts');
		const result = await postCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
}

export async function POST(request) {
	
	try {
		const post = await request.json();
		const database = await DBConnect();
		const postCollection = database.collection('posts');

		const newPost = await postCollection.insertOne(post);
		return NextResponse.json(newPost);
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse({ error: error.message });
	}
}
