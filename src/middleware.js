import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {

    try {
        let cookie = request.cookies.get('jwt-token')?.value

        if (!cookie || !cookie.startWith('Bearer')) {
            throw new Error('Invalid token')
        }

        const secret = new TextEncoder().encode(process.env.JWT_sectect_key)
        await jwtVerify(cookie.split(' ')[1], secret)

        return NextResponse.next()

    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*'],
}