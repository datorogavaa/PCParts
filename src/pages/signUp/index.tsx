import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
    const [name , setName ] = useState('')
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
            body: JSON.stringify({name,email,password})
        })
        if (postReq.ok) {
            return router.push('/')
        }
    }
    return (
        <div className={styles.LoginDiv}>
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input 
                    name="name" 
                    className={styles.loginInput}
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />
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
                    <button className={styles.loginButton} type="submit" >Sign Up</button>
                    <p style={{ fontSize: '16px', marginTop: '10px' }}>Already Have an Account? Log In ↓ </p>
                    <Link href="http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2FsignUp">
                        <button className={styles.loginButton} type="button">Log In</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
