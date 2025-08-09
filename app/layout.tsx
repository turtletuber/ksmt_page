import { Geist, Geist_Mono, Creepster, Permanent_Marker, Courier_Prime, Inter, Nunito_Sans, Archivo_Narrow, Amatic_SC, Kalam } from "next/font/google";
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

const creepster = Creepster({
    subsets: ['latin'],
    weight: ['400']
})

const permanentMarker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400']
})

const courierPrime = Courier_Prime({
    subsets: ['latin'],
    weight: ['400', '700']
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

const archivoNarrow = Archivo_Narrow({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

const amaticSC = Amatic_SC({
    subsets: ['latin'],
    weight: ['400', '700']
})

const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700']
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
              className={`${grandstander.className} ${geistSans.className} ${geistMono.className} ${creepster.className} ${permanentMarker.className} ${courierPrime.className} ${inter.className} ${nunitoSans.className} ${archivoNarrow.className} ${amaticSC.className} ${kalam.className}`}
              style={{
                '--font-grandstander': grandstander.style.fontFamily,
                '--font-geist-sans': geistSans.style.fontFamily,
                '--font-geist-mono': geistMono.style.fontFamily,
                '--font-creepster': creepster.style.fontFamily,
                '--font-permanent-marker': permanentMarker.style.fontFamily,
                '--font-courier-prime': courierPrime.style.fontFamily,
                '--font-inter': inter.style.fontFamily,
                '--font-nunito-sans': nunitoSans.style.fontFamily,
                '--font-archivo-narrow': archivoNarrow.style.fontFamily,
                '--font-amatic-sc': amaticSC.style.fontFamily,
                '--font-kalam': kalam.style.fontFamily,
              } as React.CSSProperties}>
        <body>{children}</body>
        </html>
    )
}