import prisma from "@/lib/db";
import { NextApiRequest,NextApiResponse } from "next";

export default async function Product(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } catch (error) {
        console.log("error is: ", error)
    }
}