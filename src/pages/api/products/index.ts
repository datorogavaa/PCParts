import prisma from "@/lib/db";
import { NextApiRequest,NextApiResponse } from "next";

export default async function Product(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await prisma.product.findMany()
        if(!products) {
            return res.status(404).json('Products not found')
        }
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}