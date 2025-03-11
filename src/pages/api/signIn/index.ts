import prisma from "@/lib/db"
import bcrypt, { compare } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from "next"
import { signUpFormSchema, User } from "@/lib/definitions";
export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body
    if (req.method === 'POST') {
        try {
            console.log({name,email,password})
            const userInfo = await prisma.user.findUnique({
                where: {
                    email: email,
                }
            })
            if(userInfo &&  await compare(password, userInfo.password))  {
                return res.status(201).json(userInfo)
            }
        } catch (error) {
            return res.status(500).json(`Internal server error ${error}`)
        }
    }else{
        res.status(405).json('Method Not Allowed')
    }
}

