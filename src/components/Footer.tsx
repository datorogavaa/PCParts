import styles from "@/styles/Home.module.css"
import Link from "next/link"
export default () => {

    return (
        <div>
            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}  className={styles.footerDiv}>
                <div style={{display: 'flex',  width: '100vw',justifyContent: 'space-around',alignItems: 'center'}}>
                    <div style={{display: 'flex',flexDirection: "column"}}>
                        <h4>დაგვიკავშირდი</h4>
                        <p className={styles.footerP}><span><img style={{ marginRight:'8px'}} src="map-icon.png" alt="icon1" /></span>მისამართი : თბილისი, ნოე ჩხიკვაძის 12</p>
                        <p className={styles.footerP} ><span><img  style={{ marginRight:'8px'}} src="call-icon.png" alt="icon2" /></span>დაგვირეკე : +995 591721515</p>
                        <p className={styles.footerP}><span><img  style={{ marginRight:'8px'}} src="mail-icon.png" alt="icon3" /></span>მოგვწერე : datorogavaa@gmail.com</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h4>PC Parts</h4>
                        <p style={{marginTop: '20px', fontSize: '17px'}}> Dato Rogava © 2025 ყველა უფლება დაცულია </p>
                    </div>
                    <div style={{textAlign: 'center', marginRight: '15px'}}>
                        <h4>ჩვენს შესახებ</h4>
                        <p style={{marginTop: '20px', fontSize: '17px'}}>უმაღლესი ხარისხის პროდუქცია
                        <br></br>დაბალი ფასები<br></br> სწრაფი მომსახურება</p>
                    </div>
                </div>
            </div>
        </div>
    )
}