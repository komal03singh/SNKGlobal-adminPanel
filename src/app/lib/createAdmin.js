import bcrypt from "bcrypt"
import Admin from "@/models/admin.model.js"

export default async function createDefaultAdmin(){
    const existing = await Admin.findOne({name:process.env.ADMIN_NAME})
    if(existing) return

    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD,10)
    await Admin.create({
        name:process.env.ADMIN_NAME,
        password:hashed
    })

    console.log("Defalult admin created")
}