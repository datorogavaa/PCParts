import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from '@/styles/Home.module.css'

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
    }, [id]); 

    return (
        <main>
            {product ? (
                <div>
                    <h1>{product.Name}</h1>
                    <p>{product.Description}</p>
                    <p>{product.Price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link href={`/editProduct/${id}`}><button className={styles.editProductsButton}>Update Product</button></Link>
            <form method="POST" action={`/api/productCRUD/deleteProduct/${id}`} >
                <button type="submit" className={styles.deleteProductsButton}>Delete Product</button>
            </form>
        </main>
    );
}
