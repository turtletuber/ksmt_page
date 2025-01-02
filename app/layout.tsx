import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Grandstander } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
})

const grandstander = Grandstander({
    subsets: ['latin'],
    weight: ['700', '800'],
})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: 'Kids Should Make Things',
    description: 'Empowering kids to create through hands-on projects',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${grandstander.className}`}>
        <body>{children}</body>
        </html>
    )
}