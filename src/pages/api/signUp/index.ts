// 'use-server'
// import { signUpFormSchema } from "@/lib/definitions";
// import { NextApiRequest, NextApiResponse } from "next";
// export default async function signUp(req: NextApiRequest, res: NextApiResponse) {
//     const { name, email, password } = req.body
//     const data = signUpFormSchema.safeParse({
//         name: name,
//         email: email,
//         password: password 
//     })
//     if (!data.success) {
//         return {
//             errors: data.error.flatten().fieldErrors
//         }
//     }
//     return res.status(200).json({message: "Sign up succesful!"})
// }