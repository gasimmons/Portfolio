"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Fix the type import issue
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}