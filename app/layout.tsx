import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Private Coaching',
  description: 'One-on-one confidential coaching sessions for only $35 per session',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F0EFE9] min-h-screen">
        {children}
      </body>
    </html>
  )
}