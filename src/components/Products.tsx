'use client'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import axios from "axios";
import { useEffect,useState } from "react";

export let Data = [];
export default () => {
    const [data,setData ] = useState([])

    useEffect( () => {
       Data = data
    },[data])
    const result = () => {
        axios.get("https://makeup-api.herokuapp.com/api/v1/products.json").then(res => {
            const newData = res.data
            setData(newData)
            console.log(data)
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
            data.filter((item: any) => item.id > 1000 && item.price > 0).map(((item: any,key) => {
                return (
                <div className={styles.Product} key={key}>
                    <div className={styles.ProductFirstDiv}>
                        <h3 className={styles.ProductTitle}>{item.name}</h3>
                        <h5 className={styles.ProductDescription}>{item.description}</h5>
                        <img className={styles.ProductImg} src={item.api_featured_image }/>
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
            <div style={{ justifyContent: "center", display: 'flex'}}><Link href="Products"><button  className={styles.seemoreButton}>All Products</button></Link> </div>
        </div>
    )
}