import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Vikram Photography",
  description: "I am a photographer and videographer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
