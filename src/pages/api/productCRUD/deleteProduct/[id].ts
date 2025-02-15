import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function deleteProduct(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    if (req.method === "POST" ) {
        try {
            await prisma.product.delete({
                where: { id }
            })
            return  res.redirect('/')
        }
        catch (error) {
            return res.status(500).json({message: "Internal Server Error"})
        }
    } else {
        return res.status(405).json({message: "Method not allowed"})
    }
}