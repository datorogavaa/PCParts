import { useEffect, useState } from "react"
import Link from "next/link"
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
                        <h1> <Link href={`/products/${item.id}`}>{item.Name}</Link></h1>
                    </div>
                ))
            }
        </main>
    )

}