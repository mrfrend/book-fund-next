import { DM_Sans } from "next/font/google";
import "./globals.css";
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={dmSans.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
