import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

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
        <html lang="en"
              className={`${inter.className}`}
              style={{
                '--font-inter': inter.style.fontFamily,
              } as React.CSSProperties}>
        <body>{children}</body>
        </html>
    )
}