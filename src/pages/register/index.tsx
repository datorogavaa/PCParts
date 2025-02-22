import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default () => {
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const checkPassword = (e: any) => {
        e.preventDefault();
        if ( password !== confirmPassword ) {
            return alert('Passwords do not match')
        }
        const form = e.target as HTMLFormElement;
        form.submit();
    }
    return (
            <div style={{ height: '1000px'}} className={styles.LoginDiv}>
                <h1>Create an Account</h1>
                <form onSubmit={checkPassword} method='POST' action="/api/userCRUD/addUser">
                    <h2>Name</h2>
                    <input name='name' className={styles.loginInput}></input>
                    <h2>Lastname</h2>
                    <input name='lastname' className={styles.loginInput}></input>
                    <h2>Age</h2>
                    <input name='age' className={styles.loginInput}></input>
                    <h2>Email</h2>
                    <input name='email' className={styles.loginInput}></input>
                    <h2>Password</h2>
                    <input onChange={(e) =>  setPassword(e.target.value)} type='password' name='password' className={styles.loginInput}></input>
                    <h2>Confirm Password</h2>
                    <input  onChange={(e) =>  setConfirmPassword(e.target.value)} type='password' name='confirmPassword' className={styles.loginInput}></input>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button className={styles.loginButton} type='submit'>Sign Up</button>
                        <p style={{fontSize: '16px', marginTop: '10px'}}>Already Have an Account?  Log In ↓ </p>
                        <Link href='/login'><button className={styles.loginButton} type='button'>Log In</button></Link>
                    </div>
                </form>
            </div>
    )
}