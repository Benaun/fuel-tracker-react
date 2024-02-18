import { Montserrat } from "next/font/google";
import Head from "./head";

const main = Montserrat({
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
})

export default function StartLayout({ children }) {
    return (
        <div className={`flex flex-col w-full mx-auto bg-[#F1EBF5] ${main.variable}`}>
            <Head />
            <main className="font-main flex flex-col w-full">
                {children}
            </main>
        </div>
    )
}