import type { ReactNode } from 'react'
import { useAccount } from 'wagmi'

import { NetworkSwitcher } from '../web3/SwitchNetworks'

export function Header({ action }: { action?: ReactNode }) {
  const { isConnected } = useAccount()

  return (
    <div className="sticky top-0 z-10 box-border h-14 border-b-1 border-border border-solid bg-background">
      <div className="grid grid-cols-2 m-auto h-full lt-sm:px-4 sm:px-8">
        <div className="flex-col-center items-start">{isConnected && <NetworkSwitcher />}</div>

        <div className="flex items-center justify-end">{isConnected && action}</div>
      </div>
    </div>
  )
}
