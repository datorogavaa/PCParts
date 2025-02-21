import Footer from "@/components/Footer"
import Header from "@/components/Header"
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