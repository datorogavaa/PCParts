import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function editProduct(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' || req.method === 'PUT') {
    const { id } = req.query
    const { name, description, price, image } = req.body;
    try {
      await prisma.product.update({
        where: { id },
        data: {
          Name: name,
          Description: description, 
          Price: Number(price), 
          Image: image
        },
      });
      return res.redirect('/')
      
    } catch (error) {
      console.error(error);
      console.log(req.body)
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" }); 
  }
}
