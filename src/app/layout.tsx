import type { Metadata } from 'next'
import StyledComponentsRegistry from '../../registry'
import { AppContextProvider } from '@/context/AppContext'

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
    <AppContextProvider>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>  
        </body>
      </html>
    </AppContextProvider>
  )
}
