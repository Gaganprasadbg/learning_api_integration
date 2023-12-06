import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutComponent from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LayoutComponent>

      <body className={inter.className}>{children}</body>
      </LayoutComponent>
    </html>
  )
}
