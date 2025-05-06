import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import ClientOnly from "@/components/client-only" // Import the ClientOnly component

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Madhur Caterers - Authentic Indian Catering",
  description: "Experience the rich flavors of India with our premium catering services for all occasions.",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientOnly> {/* Only render the children on the client side */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
