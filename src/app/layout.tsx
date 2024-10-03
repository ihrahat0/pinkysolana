import './globals.css'
import { AppKit } from './context/web3modal'

export const metadata = {
  title: 'My Solana App',
  description: 'AppKit Solana Example'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  )
}
