import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TurinoS Store',
  description: 'Developed by Paulo Turino',
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
