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
                <h1 style={{fontSize: '40px'}} >WHAT SAYS CUSTOMERS</h1>
                <div className={styles.restDiv}>
                        <div style={{display: "flex"}}>
                            <img src="client-img.png" className="d-block w-100" alt="..."/>
                            <div style={{display: "flex", flexDirection: "column", marginTop: "60px"}}>
                                <h5 style={{fontSize: '36px'}}>Jack</h5>
                                <p style={{marginTop: '5px'}}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu</p>
                            </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center',marginTop: '40px'}}>
                    <button className={`carousel-control-prev ${styles.restButton1}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">  <i style={{fontSize: '30px'}} className="bi bi-arrow-left"></i></span>
                    </button>
                    <button className={`carousel-control-next ${styles.restButton1}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"> <i style={{fontSize: '30px'}} className="bi bi-arrow-right"></i></span>
                        <span className="visually-hidden"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}