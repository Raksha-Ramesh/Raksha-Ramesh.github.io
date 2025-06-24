import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raksha Ramesh - Portfolio',
  description: 'Personal portfolio website of Raksha Ramesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
