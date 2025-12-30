import { NextResponse } from "next/server"
import { generateToken } from "@/app/lib/auth.js"

export async function POST(req) {

    try {

        const {name,password} = await req.json()

        if(!name || !password) return NextResponse.json({success:false,message:"Missing credentials",status:400})

        if(name == process.env.ADMIN_NAME && password == process.env.ADMIN_PASSWORD)
        {
            const token = generateToken(name)
            const res = NextResponse.json({success:true,data:token,status:200})
            res.cookies.set("token",token,{
                httpOnly:true,
                maxAge:60*60*24*15,
                secure: process.env.NODE_ENV === "production",
                sameSite:"lax",
                path: "/",
            })
            return res
        }
    
        return NextResponse.json(
            { success: false, message: "Invalid admin credentials" },
            { status: 401 }
        )

    } catch (error) {
        
        console.error("Login error:", error);
        return NextResponse.json(
        { success: false, message: "Internal server error" },
        { status: 500 }
    )
    }
}