import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react"
export default () => {
    const [products, setProducts ] = useState<any[]>([])
    useEffect(() => {
    async function getData() {
        const response = await fetch('/api/products')
        const modResponse = await response.json();
        setProducts(modResponse)
        }
        getData();
    }, [])

    return (
        <div>
            <div className={styles.ParentDivofProducts}>
            <h2 className={styles.ProductsHeader}>OUR PRODUCTS</h2>
            {
                products.map((item: any) => (
                    <div>
                        <div className={styles.Product}>
                            <div className={styles.ProductFirstDiv}>
                                <h3 className={styles.ProductTitle}>{item.Name}</h3>
                                <h5 className={styles.ProductDescription}>{item.Description}</h5>
                                <img className={styles.ProductImg} src='https://sdcdn.io/mac/gb/mac_sku_M0N904_1x1_0.png?width=1080&height=1080'/>
                            </div>
                            <div className={styles.ProductSecondDiv}>
                                <button className={styles.ProductButton}>BUY NOW</button>
                                <button  className={styles.ProductButton1}>ADD TO CART</button>
                                <p className={styles.ProductText}>Price <br/> {item.Price}$</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}