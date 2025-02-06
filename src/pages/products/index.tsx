import { useEffect, useState } from "react"

export default function ProductsPage()  {
    const [products, setProducts ] = useState<any[]>([])
    useEffect(() => {
        async function getData() {
            const response = await fetch('api/products')
            const modResponse = await response.json();
            setProducts(modResponse)
        }
        getData()
    }, [])

    return (
        <main>
            {
                products.map(item => (
                    <div>
                        <h1>{item.Name}</h1>
                        <p>{item.Description}</p>
                    </div>
                ))
            }
        </main>
    )

}