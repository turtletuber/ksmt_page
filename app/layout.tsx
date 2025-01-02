import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Grandstander } from 'next/font/google'

const grandstander = Grandstander({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-grandstander',
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
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Grandstander:wght@800&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
        </html>
    )
}