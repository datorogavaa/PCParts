import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { sign } from 'crypto'
export default () => {
    const [email , setEmail ] = useState('')
    const [password , setPassword] = useState('')
    const router = useRouter()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const login = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        })

        if (!login?.error) {
            router.push('/')
        }else{
            console.log(login.error)
        }
    }
    return (
        <div className={styles.LoginDiv}>
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
                <h2>Email</h2>
                <input 
                    name="email" 
                    className={styles.loginInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <h2>Password</h2>
                <input 
                    type="password" 
                    name="password" 
                    className={styles.loginInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button className={styles.loginButton} type="submit" >Log In</button>
                    <div>
                    <button className={styles.loginButton} onClick={signIn} >Log In with Gmail or Github</button>
                    </div>
                    <p style={{ fontSize: '16px', marginTop: '10px' }}>Don't Have an Account? Sign Up ↓ </p>
                    <Link href="/signUp">
                        <button className={styles.loginButton} type="button">Sign Up</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
