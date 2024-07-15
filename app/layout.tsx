import type { Metadata } from "next";
import { Inter, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast";
const inter = Inter({ subsets: ["latin"] });
const instrument = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});
const dm_sans = DM_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Reflect",
  description: "Journaling App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.className}  ${dm_sans.className}`}>
      <body >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
