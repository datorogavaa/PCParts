import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Products from "@/components/Products"
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
        <div style={{ marginTop:'80px', marginBottom: '100px'}}>
            <h2 className={styles.ProductsHeader}>ყველა პროდუქტი</h2>
            <div className={styles.ParentDivofProduct}>
            {
                products.map((item: any) => (
                        <div className={styles.Product}>
                            <div className={styles.ProductFirstDiv}>
                            <Link href={`/products/${item.id}`}><h3 className={styles.ProductTitle}>{item.Name}</h3></Link>
                                <h5 className={styles.ProductDescription}>{item.Description}</h5>
                                <img className={styles.ProductImg} src={item.Image}/>
                            </div>
                            <div className={styles.ProductSecondDiv}>
                                <button className={styles.ProductButton}>ყიდვა</button>
                                <button  className={styles.ProductButton1}>კალათაში დამატება</button>
                                <p className={styles.ProductText}>ფასი: <br/>{item.Price}$</p>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
}