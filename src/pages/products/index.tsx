import { useEffect, useState } from "react"
import Link from "next/link"
import styles from '@/styles/Home.module.css'
export default function ProductsPage()  {
    const [products, setProducts ] = useState<any[]>([])
    useEffect(() => {
        async function getData() {
            const response = await fetch('/api/products')
            const modResponse = await response.json();
            setProducts(modResponse)
        }
        getData()
    }, [])

    return (
        <main>
            {
                products.map(item => (
                    <div key={item.id}>
                        <Link href={`/products/${item.id}`}><h1 className={styles.editProductsButton}>{item.Name}</h1></Link>
                    </div>
                ))
            }
        </main>
    )

}