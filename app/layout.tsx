import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Grandstander } from 'next/font/google'

const grandstander = Grandstander({
    subsets: ['latin'],
    weight: ['700', '800']
})

const geistSans = Geist({
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
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
        <html lang="en" className={`${grandstander.className} ${geistSans.className} ${geistMono.className}`}>
        <body>{children}</body>
        </html>
    )
}