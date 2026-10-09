import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "This is Bazar Dor apps monitoring the price of every products in market",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

      </body>
    </html>
  );
}
