import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductDetailPage() {
    const [product, setProduct] = useState<any | null>(null);
    const router = useRouter();
    const { id } = router.query; 

    useEffect(() => {
        if (!id) return; 
        async function getData() {
            const response = await fetch(`/api/products/${id}`); 
            const modResponse = await response.json();
            setProduct(modResponse);
        }
        getData();
    }, []); 

    return (
        <main>
            {product ? (
                <div>
                    <h1>{product.Name}</h1>
                    <p>{product.Description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
