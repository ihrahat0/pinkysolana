'use client'

import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

// Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// Get projectId from environment variable
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Create a metadata object
const metadata = {
  name: 'My Solana App',
  description: 'My Solana App Description',
  url: 'https://myapp.com', // Update this to match your domain
  icons: ['https://avatars.myapp.com/'] // Update this with your app's icon
}

// Create AppKit instance
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function AppKit({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
