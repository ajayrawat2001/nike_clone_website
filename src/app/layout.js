import { Navbar } from './componets'
import './globals.css'

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
      <head>
        <link rel="icon" href='/assets/favicon.ico' sizes="any" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
