import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Product(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
        return res.status(400).json({ message: "Invalid product ID" });
    }

    try {
        const product = await prisma.product.findUnique({
            where: { id: id },
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });  
        }

        res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
