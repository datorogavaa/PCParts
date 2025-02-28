// import prisma from "@/lib/db";
// import { NextApiRequest,NextApiResponse } from "next";
// export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
//     const { name,lastname,age,email,password } = req.body
//     if (req.method === 'POST') {
//         try {
//             await prisma.user.create({
//                 data: {
//                     Name: name,
//                     Lastname: lastname,
//                     Age: Number(age),
//                     Email: email,
//                     Password: password
//                     }
//                 })
//             return res.redirect('/login')
//             } catch (error) {
//                 if (error instanceof Error) {
//                     console.log("Error: ", error.stack)
//                 } 
//             } 
//     } else {
//         return res.status(405).json({message: 'Method Not Allowed'})
//     }
// }