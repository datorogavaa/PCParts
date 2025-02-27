import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default () => {
    const [ visible, setVisible ] = useState(true) 
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prev) => !prev)
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    },[])

    return (    
            <div id="carousel" className={styles.Carousel}>
                <div className={`${styles.helperDiv}  ${visible ? styles.active : styles.exit}`} >
                    <div className={styles.CarouselDivFirst}>
                        <h3 className={styles.CarouselHeader}>PC <br/>Parts</h3>
                        <p className={styles.CarouselText}>გაიწმინდეთ თქვენი კომპიუტერი უმაღლესი ხარისხის ნაწილებით! <br></br>სწრაფი მიწოდება, განახლება და პროფესიონალური სერვისი - ჩვენთან!</p>
                        <button type="button" className={styles.CarouselButton}>იყიდე ახლავე</button>
                    </div>
                    <img className={styles.CarouselImage} src="https://i.ytimg.com/vi/x-zSLV2nweU/maxresdefault.jpg"/>
                </div>
            </div>
        )
}