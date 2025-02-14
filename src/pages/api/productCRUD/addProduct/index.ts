import prisma from "@/lib/db";
export default async function createProduct(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, description, price } = req.body;

        let parsedPrice = 0;
        if (typeof price === 'string' && !isNaN(Number(price))) {
            parsedPrice = Number(price);
        }

        await prisma.product.create({
            data: {
                Name: name,
                Price: parsedPrice,
                slug: name.toLowerCase().replace(/\s+/g, '-'),
                Description: description,
            },
        });
        return res.status(201).json({ message: "Product created successfully" });
    }
    return res.status(405).json({ message: "Method Not Allowed" });

}