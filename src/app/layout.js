import { Navbar } from './componets'
import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
 


export const metadata = {
  title: 'Nike',
  description: 'Nike shoe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
