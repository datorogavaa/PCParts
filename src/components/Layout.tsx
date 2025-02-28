import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import React from "react"
export default ({children}: React.PropsWithChildren<{}>)  => {
    return (
        <div >
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}