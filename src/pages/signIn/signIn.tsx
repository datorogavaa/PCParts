import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
    const [email , setEmail ] = useState('')
    const [password , setPassword] = useState('')
    const router = useRouter()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const postReq = await fetch('/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        if (postReq.ok) {
            return router.push('/')
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
                    <p style={{ fontSize: '16px', marginTop: '10px' }}>Don't Have an Account? Sign Up ↓ </p>
                    <Link href="/register">
                        <button className={styles.loginButton} type="button">Sign Up</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
