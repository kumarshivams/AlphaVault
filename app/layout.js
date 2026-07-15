import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlphaVault - AI Finance Manager",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-r from-blue-900 to-purple-900 py-12 relative overflow-hidden">
            {/* Money flow background */}
            <div className="absolute inset-0 opacity-10">
              <div className="money-flow money-flow-1">💵</div>
              <div className="money-flow money-flow-2">💴</div>
              <div className="money-flow money-flow-3">💶</div>
              <div className="money-flow money-flow-4">💷</div>
              <div className="money-flow money-flow-5">💵</div>
            </div>
            <div className="container mx-auto px-4 text-center text-gray-200 relative z-10">
              <p>Made with 💗 by Shivam Kumar </p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
