import jwt from "jsonwebtoken";

export function generateToken(name){
    return jwt.sign(
        {
            name:name,

        }
        ,process.env.JWT_SECRET,
        {
            expiresIn:"15d"
        }

    )
}

export function verifyToken(req){
    const authHeader =req.heades.get("authorization");
    if(!authHeader) throw new Error("unauthorized")

    const token = authHeader.split(" ")[1];
    return jwt.verify(token,process.env.JWT_SECRET)
}