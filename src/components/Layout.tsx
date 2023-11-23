import { Card } from "./Card/Card"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}: any) => {
    return(
        <>
        <Header />
        <Card/> 
        <Footer />
        </>
    )
}
