import type { Metadata } from "next";
import { Roboto, Josefin_Sans, Bebas_Neue} from "next/font/google";
import "./globals.css";

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-roboto',
})

const josefin_sans_init = Josefin_Sans({
  subsets:['latin'],
  weight: ['100', '300', '400', '500'],
  variable: '--font-josefin',
})

const bebas_neue_init = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: "Department of Biomedical Engineering",
  description: "Biomedical Engineering (B.Eng) at University of Ilorin is professionally accredited by the National University Commission (NUC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${josefin_sans_init.variable} ${bebas_neue_init.variable}`}>{children}</body>
    </html>
  );
}
