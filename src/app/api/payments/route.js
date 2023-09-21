


import Payment from '@/models/Payment';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        await connect();
        const payments = await Payment.find();
        return new NextResponse(JSON.stringify(payments), { status: 200 });
    } catch (error) {
        console.log(error.name, error.message);
        return NextResponse.json({ error: error.message });
    }
};



export const POST = async (req) => {
    try {
        await connect();
        const payments = await req.json();
        await Payment.create(payments);
        return NextResponse.json({
            msg: "Payment created successfully", success: true,
        })
    } catch (error) {
        console.log(error.name, error.message);
        return NextResponse.json({ error: error.message });
    }
};

