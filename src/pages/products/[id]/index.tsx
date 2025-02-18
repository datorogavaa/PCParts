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
                        <div className={styles.Product}>
                            <div className={styles.ProductFirstDiv}>
                                <h3 className={styles.ProductTitle}>{product.Name}</h3>
                                <h5 className={styles.ProductDescription}>{product.Description}</h5>
                                <img className={styles.ProductImg} src={product.Image}/>
                            </div>
                            <div className={styles.ProductSecondDiv}>
                                <button className={styles.ProductButton}>BUY NOW</button>
                                <button  className={styles.ProductButton1}>ADD TO CART</button>
                                <p className={styles.ProductText}>Price <br/> {product.Price}$</p>
                            </div>
                        </div>
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
