import { useState } from "react"
import styles from "@/styles/Home.module.css"
export default () => {

    // show/hide useState
    const [ show, setShow ] = useState(false)
    // show/hide functions
    const func = () => {
        setShow(true)

    }
    const exit = () => {
        setShow(false)
    }

    return (
            <div>
            <div>
                <nav>
                {
                    <div id="navbar" className={`${styles.navbarSecond} ${ show ? styles.active: ''}`}>
                        <br></br>
                        <div className={styles.navbarTexts}>
                            <a className={styles.navbarText} href="#">Home</a>
                            <a className={styles.navbarText} href="#">Products</a>
                            <a className={styles.navbarText} href="#">About</a>
                            <a className={styles.navbarText} href="#">Client</a>
                            <a className={styles.navbarText} href="#">Contact</a>
                        </div>
                        <div>
                            <button className={styles.xbutton} onClick={exit}>X</button>
                        </div>
                    </div>
                }
                <div className={styles.navbar}>
                <span style={{cursor: 'pointer'}}><img onClick={func}  src="toggle-icon.png" alt="logo"/></span>
                    <a href="index.html"><img src="logo.png"/></a>
                    <form>
                        <div>
                            <a className={styles.navbarA} href="#"><img src="user-icon.png"/></a>
                            <a className={styles.navbarA} href="#"><img src="bag-icon.png"/></a>
                            <a className={styles.navbarA} href="#"><img src="search-icon.png"/></a>
                        </div>
                    </form>
                </div>
                </nav>
            </div>
            </div>
        )
}