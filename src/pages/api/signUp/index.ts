import prisma from "@/lib/db"
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from "next"
import { signUpFormSchema, User } from "@/lib/definitions";
export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password }: User = signUpFormSchema.parse(req.body)
    const hashPassword = await bcrypt.hash(password,10)    

    if (req.method === 'POST') {
        try {
            console.log({name,email,password})
            const userInfo = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: String(hashPassword)
                }

            })
            if(userInfo) {
                return res.status(201).json('User Created Successfully')
            }
        } catch (error) {
            return res.status(500).json(`Internal server error ${error}`)
        }
    }else{
        res.status(405).json('Method Not Allowed')
    }
}

