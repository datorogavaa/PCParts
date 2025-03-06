// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'
// import { useState } from 'react'

// export default () => {
//     const [state, setState] = useState({ name: '', email: '', password: '', errors: {} })
//     const [loading, setLoading] = useState(false)

//     // Handler to manage form submission
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()

//         // Send data to the API (no validation here)
//         setLoading(true)
//         try {
//             const response = await fetch('/api/signUp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name: state.name, email: state.email, password: state.password }),
//             })

//             const data = await response.json()

//             if (data.errors) {
//                 setState((prevState) => ({ ...prevState, errors: data.errors }))
//             } else {
//                 // Handle success (e.g., redirect, show a success message)
//             }
//         } catch (error) {
//             console.error('Error:', error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className={styles.LoginDiv}>
//             <h1>Welcome back!</h1>
//             <form onSubmit={handleSubmit}>
//                 <h2>Name</h2>
//                 <input 
//                     name="name" 
//                     className={styles.loginInput}
//                     value={state.name}
//                     onChange={(e) => setState({ ...state, name: e.target.value })}
//                 />
//                 {state.errors.name && <p>{state.errors.name}</p>}
                
//                 <h2>Email</h2>
//                 <input 
//                     name="email" 
//                     className={styles.loginInput}
//                     value={state.email}
//                     onChange={(e) => setState({ ...state, email: e.target.value })}
//                 />
//                 {state.errors.email && <p>{state.errors.email}</p>}
                
//                 <h2>Password</h2>
//                 <input 
//                     type="password" 
//                     name="password" 
//                     className={styles.loginInput}
//                     value={state.password}
//                     onChange={(e) => setState({ ...state, password: e.target.value })}
//                 />
//                 {state.errors.password && <p>{state.errors.password}</p>}
                
//                 <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <button 
//                         className={styles.loginButton} 
//                         type="submit" 
//                         disabled={loading}
//                     >
//                         Log In
//                     </button>
//                     <p style={{ fontSize: '16px', marginTop: '10px' }}>
//                         Don't Have an Account? Sign Up ↓ 
//                     </p>
//                     <Link href="/register">
//                         <button className={styles.loginButton} type="button">
//                             Sign Up
//                         </button>
//                     </Link>
//                 </div>
//             </form>
//         </div>
//     )
// }
