import { useState } from "react"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
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
                            <Link className={styles.navbarText} href="/">Home</Link>
                            <Link className={styles.navbarText} href="/">Products</Link>
                            <Link className={styles.navbarText} href="/">About</Link>
                            <Link className={styles.navbarText} href="/">Client</Link>
                            <Link className={styles.navbarText} href="/">Contact</Link>
                        </div>
                        <div>
                            <button className={styles.xbutton} onClick={exit}>X</button>
                        </div>
                    </div>
                }
                <div className={styles.navbar}>
                <span style={{cursor: 'pointer'}}><img onClick={func}  src="toggle-icon.png" alt="logo"/></span>
                    <Link href="/"><img src="logo.png"/></Link>
                    <form>
                        <div>
                            <Link className={styles.navbarA} href="#"><img src="user-icon.png"/></Link>
                            <Link className={styles.navbarA} href="#"><img src="bag-icon.png"/></Link>
                            <Link className={styles.navbarA} href="#"><img src="search-icon.png"/></Link>
                        </div>
                    </form>
                </div>
                </nav>
            </div>
            </div>
        )
}