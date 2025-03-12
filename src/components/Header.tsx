import { useEffect,useState } from "react"
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { useSession, signIn, signOut} from "next-auth/react";
export default () => {
    const { data: session, status } = useSession()
    const [ show, setShow ] = useState(false)
    const router = useRouter();
    const func = () => {
        setShow(true)

    }
    const exit = () => {
        setShow(false)
    }
    useEffect(() => {
        const handleRouteChange = () => {
          setShow(false);
        };
    
        router.events.on("routeChangeStart", handleRouteChange);
    
        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }, [router.events]);
    if ( session ) {
        console.log(session.expires)
    }
    ''
    return (
            <div>
            <div>
                <nav>
                {
                    <div  className={`${styles.navbarSecond} ${ show ? styles.active: ''}`}>
                        <br></br>
                        <div className={styles.navbarTexts}>
                            <Link className={styles.navbarText} href='/'>მთავარი</Link>
                            <Link className={styles.navbarText} href="/products" >პროდუქტები</Link>
                            <Link className={styles.navbarText} href="/">შესახებ</Link>
                            <Link className={styles.navbarText} href="/">მომხმარებელი</Link>
                            <Link className={styles.navbarText} href="/">კონტაქტი</Link>
                        </div>
                        <div>
                            <button className={styles.xbutton} onClick={exit}>X</button>
                        </div>
                    </div>
                }
                <div className={`${styles.navbar}`}>
                <span style={{cursor: 'pointer'}}><img onClick={func}  src="toggle-icon.png" alt="logo"/></span>
                    <Link style={{textDecoration: 'none'}} href="/"><h2 className={styles.siteName}>PC Parts</h2></Link>
                        <div>
                            {!session?.user ? <button style={{backgroundColor: '#6CB4EE', border: 'none', cursor: "pointer"}} onClick={signIn} className={styles.navbarA}><img src="user-icon.png"/>Sign In</button>
                            :   <button onClick={signOut} className={styles.navbarA}><img src="user-icon.png"/>Sign Out</button> }
                            <Link className={styles.navbarA} href="/"><img src="bag-icon.png"/></Link>
                            <Link className={styles.navbarA} href="/"><img src="search-icon.png"/></Link>
                        </div>
                </div>
                </nav>
            </div>
            </div>
        )
}