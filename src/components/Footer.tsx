import styles from "@/styles/Home.module.css"
import Link from "next/link"
export default () => {

    return (
        <div>
            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}  className={styles.footerDiv}>
                <div style={{display: 'flex',  width: '100vw',justifyContent: 'space-around'}}>
                    <div style={{display: 'flex',flexDirection: "column"}}>
                        <h4>CONTACT US</h4>
                        <p style={{display: 'flex',marginTop: '20px', fontSize: '17px', listStyle: 'none',alignItems: 'center'}}><span><img style={{ marginRight:'8px'}} src="map-icon.png" alt="icon1" /></span>Address : Tbilisi</p>
                        <p style={{ display: 'flex',marginTop: '20px', fontSize: '17px', listStyle: 'none', alignItems: 'center'}}><span><img  style={{ marginRight:'8px'}} src="call-icon.png" alt="icon2" /></span>Call : +995 591721515</p>
                        <p style={{display: 'flex',marginTop: '20px', fontSize: '17px',  listStyle: 'none',alignItems: 'center'}}><span><img  style={{ marginRight:'8px'}} src="mail-icon.png" alt="icon3" /></span>Email : datorogavaa@gmail.com</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h4>PC Parts</h4>
                        <p style={{marginTop: '20px', fontSize: '17px'}}> we offer a wide range of high-quality <br></br> PC components to help you build the perfect system. <br></br> Whether you’re a gamer, a content creator, or a professional,<br></br> we’ve got the parts you need to power up your setup.</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h4>ABOUT PRODUCTS</h4>
                        <p style={{marginTop: '20px', fontSize: '17px'}}>Best Products
                        <br></br>Low Prices<br></br> You will see best products only <br></br>here</p>
                    </div>
                </div>
                <div style={{height: '1px', backgroundColor: '#0CAFFF', width: '50vw'}}></div>
            </div>
        </div>
    )
}