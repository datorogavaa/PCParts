'use client'
import styles from "@/styles/Home.module.css";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import axios from "axios";
import { error } from "console";
import { useEffect,useState } from "react";
export default () => {
    const [data,setData ] = useState([])
    const result = () => {
        axios.get("https://dummyjson.com/products").then(res => {
            const newData = res.data.products.filter((item: any) => item.category == "beauty" || item.category == "fragrances")
            setData(newData)
        }).catch(error => { return console.log(error)})
    }
    useEffect(() => {
        result()
    },[])
    useEffect(() => {
        console.log(data)
    },[data])
    return (
        <div className={styles.Products}>
            <h2 className={styles.ProductsHeader}>OUR PRODUCTS</h2>
            <h5 className={styles.ProductsHeader1}>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h5>
            <div className={styles.ParentDivofProduct}>
            {
            data.map(((item: any,key) => {
                return (
                <div className={styles.Product} key={key}>
                    <div className={styles.ProductFirstDiv}>
                        <h3 className={styles.ProductTitle}>{item.title}</h3>
                        <h5 className={styles.ProductDescription}>{item.description}</h5>
                        <img className={styles.ProductImg} src={item.images[0]}/>
                    </div>
                    <div className={styles.ProductSecondDiv}>
                        <button className={styles.ProductButton}>BUY NOW</button>
                        <button  className={styles.ProductButton1}>ADD TO CART</button>
                        <p className={styles.ProductText}>Price <br/> {item.price}$</p>
                    </div>
                </div>
                )
            }))
            }
            </div>
        </div>
    )
}