import styles from "@/styles/Home.module.css"
import Link from "next/link"
export default () => {

    return (
        <div>
            <div  className={styles.footerDiv}>
                <div style={{display: 'flex',flexDirection: "column"}}>
                    <h4>CONTACT US</h4>
                    <p style={{display: 'flex',marginTop: '20px', fontSize: '17px', listStyle: 'none',alignItems: 'center'}}><span><img style={{ marginRight:'8px'}} src="map-icon.png" alt="icon1" /></span>Address : Loram Ipusm</p>
                    <p style={{ display: 'flex',marginTop: '20px', fontSize: '17px', listStyle: 'none', alignItems: 'center'}}><span><img  style={{ marginRight:'8px'}} src="call-icon.png" alt="icon2" /></span>Call : +01 1234567890</p>
                    <p style={{display: 'flex',marginTop: '20px', fontSize: '17px',  listStyle: 'none',alignItems: 'center'}}><span><img  style={{ marginRight:'8px'}} src="mail-icon.png" alt="icon3" /></span>Email : mail@domain.com</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h4>BEAUTY STORE</h4>
                    <p style={{marginTop: '20px', fontSize: '17px'}}>commodo consequat. Duis aute irure dolor in <br></br>reprehenderit in voluptate velit esse cillum dolore eu <br></br> fugiat nulla pariatur. Excepteur sint occaecat <br></br>cupidatat non</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h4>BEST PRODUCTS</h4>
                    <p style={{marginTop: '20px', fontSize: '17px'}}>Best Products
                    dolore eu fugiat <br></br>nulla pariatur.<br></br> Excepteur sint<br></br> occaecat cupidatat <br></br>non</p>
                </div>
            </div>
            <div style={{height: '1px', backgroundColor: 'orange', width: '800px'}}></div>
        </div>
    )
}