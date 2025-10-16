import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    const token = req.cookies.get("token")?.value

    const adminRoutes = ["/AdminDashboard", "/ListProducts",]

    if(adminRoutes.some(route = req.nextUrl.pathname.startsWith(route)))
    {
        if(!token) return NextResponse.redirect(new URL("/", req.url))

        try {
            jwt.verify(token,process.env.JWT_SECRET)
            return NextResponse.next()
        } catch (error) {
            console.log("Invalid or expired token", error)
            return NextResponse.redirect(new URL("/", req.url))

        }
    }

    return NextResponse.next()

}

export const config = {

        matcher : [
            "/AdminDashboard/:path*",
            "/ListProducts/:path*"
        ],
    }