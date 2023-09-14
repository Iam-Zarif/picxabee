import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {

    try {
        await connect()
        const singleUser = await User.findOne({_id: params.id})
        return new NextResponse(JSON.stringify({singleUser}), { status: 200 });
        
    } catch (err) {
        return new NextResponse('User Fetch Problems', { status: 500 });
    }
};