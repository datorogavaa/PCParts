import styles from '@/styles/Home.module.css'
export default () => {
    return (
            <div className={styles.LoginDiv}>
                <h1>Create an Account</h1>
                <form action="get">
                    <h2>Name</h2>
                    <input name='name' className={styles.loginInput}></input>
                    <h2>Lastname</h2>
                    <input name='lastname' className={styles.loginInput}></input>
                    <h2>Age</h2>
                    <input name='Age' className={styles.loginInput}></input>
                    <h2>Email</h2>
                    <input name='login' className={styles.loginInput}></input>
                    <h2>Password</h2>
                    <input name='password' className={styles.loginInput}></input>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button className={styles.loginButton} type='submit'>Log In</button>
                    </div>
                </form>
            </div>
    )
}