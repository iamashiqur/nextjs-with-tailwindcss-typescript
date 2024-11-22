import ReduxProvider from '@/reduxprovider/ReduxProvider'
import type { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: 'iamashiqur - iamashiq@gmail.com :: ',
  description: 'This starter pack created by Ashiqur Rahman '
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
