'use client'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import { useEffect,useState } from "react";
import { useSession } from "next-auth/react";


export let Data = [];
export default () => {
    const [products, setProducts ] = useState<any[]>([])
    const { data: session, status } = useSession();
    useEffect(() => {
    async function getData() {
        const response = await fetch('/api/products')
        const modResponse = await response.json();
        setProducts(modResponse)
        }
        getData();
    }, [])

    return (
        <div className={styles.Products}>
            <h2 className={styles.ProductsHeader}>OUR PRODUCTS</h2>
            <h5 className={styles.ProductsHeader1}>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h5>
            <div className={styles.ParentDivofProduct}>
            
            {
                products.map((item: any) => (
                    <div>
                        <div className={styles.Product}>
                            <div className={styles.ProductFirstDiv}>
                            <Link href={`/products/${item.id}`}><h3 className={styles.ProductTitle}>{item.Name}</h3></Link>
                                <h5 className={styles.ProductDescription}>{item.Description}</h5>
                                <img className={styles.ProductImg} src={item.Image}/>
                            </div>
                            <div className={styles.ProductSecondDiv}>
                                <button className={styles.ProductButton}>BUY NOW</button>
                                <button  className={styles.ProductButton1}>ADD TO CART</button>
                                <p className={styles.ProductText}>Price <br/>{item.Price}$</p>
                            </div>
                        </div>
                    </div>
                ))
            }

            </div>
            <div style={{ justifyContent: "center", display: 'flex'}}><Link href="/products"><button  className={styles.seemoreButton}>All Products</button></Link> 
            {
                status === 'authenticated' ? <Link href="addProduct"><button className={styles.addProductsButton}>Add Product</button></Link> : ''
            }
            </div>
        </div>
    )
}