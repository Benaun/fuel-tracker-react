import { Montserrat } from "next/font/google";
import Footer from "./footer";
import Head from "./head";
import Header from "./header";

const main = Montserrat({
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
})

export default function PageLayout({ children }) {
    return (
        <div className={`flex flex-col h-screen justify-between w-full mx-auto ${main.variable}`}>
            <Head />
            <Header />
            <main className="font-main flex flex-col w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}