'use client'

import { useAppKit } from '@reown/appkit/react'

export default function ConnectButton() {
  const { open } = useAppKit()

  return (
    <button onClick={() => open()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Connect Wallet
    </button>
  )
}
