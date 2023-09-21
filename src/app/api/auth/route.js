// import Story from "@/models/Story"
// import connect from "@/utils/db"
// import { SignJWT } from "jose"
// import { NextResponse } from "next/server"
// import { cookies } from 'next/headers'

// export const POST = async (request) => {

//     const body = await request.json()

//     console.log(body);

//     try {
//         const secret = new TextEncoder().encode(process.env.JWT_sectect_key)
//         const alg = 'HS256'

//         const jwt = await new SignJWT(body)
//             .setProtectedHeader({ alg })
//             .setIssuedAt()
//             .setExpirationTime('2h')
//             .sign(secret)

//         cookies().set({
//             name: 'jwt-token',
//             value: `Bearer ${jwt}`,
//             secure: true,
//             httpOnly: true
//         })

//         return NextResponse.json({ message: "Set Cookie" }, { status: 201 });
//     } catch (error) {
//         return NextResponse.json({ message: "can't created Api" }, { status: 500 });

//     }


//     // try {


//     // } catch (err) {
//     //     return new NextResponse("Database Error", { status: 500 });
//     // }
// }