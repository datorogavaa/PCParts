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
                <div style={{ margin: '100px'}}>
                        <div style={{ display: 'flex'}}>
                            <img style={{ width: '500px', height: '500px'}} src={product.Image}/>
                            <div style={{ marginLeft: '40px', display: 'flex', flexDirection: "column"}}>
                                <h3 style={{ fontSize: '25px'}}>{product.Name}</h3>
                                <h5 style={{ backgroundColor: '#F7F7F7',fontSize: '20px',width: '700px', marginTop: '60px', padding: '20px'}}>{product.Description}</h5>
                                <div style={{display: 'flex'}}>
                                <Link href={`/editProduct/${id}`}><button className={styles.updateProductsButton}>პროდუქტის რედაქტირება</button></Link>
                                <form method="POST" action={`/api/productCRUD/deleteProduct/${id}`} >
                                    <button type="submit" className={styles.deleteProductsButton}>პროდუქტის წაშლა</button>
                                </form>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: '10px',borderStyle: "solid",alignItems: "center",borderWidth: '1px', borderColor: 'grey', width: '400px', display: "flex", flexDirection: 'column',justifyContent: "space-around"}}>
                                    <h1 style={{color: "black", float: 'left',fontSize: '40px', fontWeight: '700'}} className={styles.ProductText}> <br/> {product.Price}$</h1>
                                    <label style={{backgroundColor: '#F7F7F7', fontSize: '12px', fontWeight: '700',width: '350px', textAlign: "center", height: '120px', alignContent: "center"}}>Newegg Store Credit Card
                                        $43/mo suggested payments with 12- <br></br>month special financing. <Link href='#' style={{color: '#c63527'}}>Learn how</Link><br></br>
                                        As low as $47/month or 15% APR with Affirm. <br></br>Prequalify Now. <br></br>
                                        4 payments
                                        of
                                        $129.00
                                        with
                                        ⓘ</label>
                                <button style={{display: 'block', width: '250px' }} className={styles.ProductButton1}>CHOOSE COUNT</button>
                                <button style={{display: 'block', width: '250px' }} className={styles.ProductButton1}>BUY NOW</button>
                                <button style={{display: 'block', width: '250px' }} className={styles.ProductButton1}>ADD TO CART</button>
                            </div>
                        </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
