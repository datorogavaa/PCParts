import styles from "@/styles/Home.module.css"

export default () => {
    return (
        <div  className={styles.restmainDiv}>
            <div className={styles.div}>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <h1 className={styles.restHeader}>ABOUT OUR <br/> BEAUTY STORE</h1>
                    <p className={styles.restText}>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <button className={styles.restButton}>READ MORE</button>
                </div>
                <img className={styles.restImg} src="about-img.png"/>
            </div>
            <div className={styles.div1}>
                <h1 className={styles.restHeader1}>WHAT SAYS CUSTOMERS</h1>
                <div className={styles.restDiv}>
                        abgd
                </div>
            </div>
        </div>
    )
}