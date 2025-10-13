import dbConnect from "@/app/lib/connectToDB.js"
import Admin from "@/models/admin.model.js"

export async function POST(req) {
    await dbConnect()
    const {name,password} = await req.json()

    const admin = await Admin.findOne({name})
    if(!admin) return Response.json({success:false,message:"Admin not found",status:400})

    const isMatched = await bcyrpt.compare(password,admin.password)
    if(!isMatched) return Response.json({success:false,message:"Incorrect password",status:400})

    const token = generateToken(admin)

    return Response.json({success:true,data:token,status:200})
}