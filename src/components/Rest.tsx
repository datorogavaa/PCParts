import styles from "@/styles/Home.module.css"

export default () => {
    return (
        <div  className={styles.restmainDiv}>
            <div className={styles.div}>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <h1 className={styles.restHeader}>ჩვენს <br/>შესახებ</h1>
                    <p className={styles.restText}>ჩვენი კომპანია გთავაზობთ ხარისხიან კომპიუტერულ ნაწილებს და ინოვაციურ ტექნოლოგიურ გადაწყვეტილებებს. ჩვენ ვმუშაობთ მხოლოდ ნდობით აღჭურვილ ბრენდებთან, რათა უზრუნველვყოთ თქვენი კომპიუტერის მაღალი შესრულება და სისწრაფე. სწრაფი მიწოდება და კმაყოფილი მომხმარებლები — ჩვენი მთავარი პრიორიტეტია!</p>
                    <button className={styles.restButton}>მეტის ნახვა</button>
                </div>
                <img className={styles.restImg} src="https://i.insider.com/577440ffdd0895585b8b4a4b?width=1197&format=jpeg"/>
            </div>
            <div className={styles.div1}>
                <h1 style={{fontSize: '40px'}} >რას ამბობს მომხმარებელი</h1>
                <div className={styles.restDiv}>
                        <div style={{display: "flex"}}>
                            <img style={{ marginBottom: '20px', height: '190px'}} src="https://png.pngtree.com/png-vector/20240324/ourmid/pngtree-client-icon-leader-employee-boss-png-image_12047256.png" className="d-block w-100" alt="..."/>
                            <div style={{display: "flex", flexDirection: "column", marginTop: "40px"}}>
                                <h5 style={{fontSize: '36px'}}>დათო</h5>
                                <p style={{marginTop: '5px'}}>მაღალი ხარისხის პროდუქტი და სწრაფი მომსახურება. გირჩევთ ყველას PCParts აუცილებლად!</p>
                            </div>
                        </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center',marginTop: '40px'}}>
                    <button className={`carousel-control-prev ${styles.restButton1}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    ←
                    </button>
                    <button className={`carousel-control-next ${styles.restButton1}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    →
                    </button>
                </div>
            </div>
        </div>
    )
}