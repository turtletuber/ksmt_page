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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${grandstander.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}