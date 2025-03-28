import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const firaCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira-code",
})

export const metadata: Metadata = {
    title: "Gavin Simmons - Backend Engineer",
    description: "Backend engineer portfolio showcasing projects and skills",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen font-sans antialiased", inter.variable, firaCode.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}


