import { shorten } from '@did-network/dapp-sdk'
import type { ReactNode } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { useCopyToClipboard } from '@/hooks/user-copy'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function WalletModal(props: {
  children: ({ isLoading }: { isLoading?: boolean }) => ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  close?: () => void
}) {
  const { connectAsync, connectors, isPending } = useConnect()
  const { address, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const [pendingConnectorId, setPendingConnectorId] = useState('')

  const [, copyHandler] = useCopyToClipboard()
  const [copyText, setCopyText] = useState('Copy Address')

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogTrigger asChild>{props.children({ isLoading: isPending })}</DialogTrigger>
      <DialogContent className="font-[Figtree] md:top-70 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Wallet</DialogTitle>
          <DialogDescription>connect to web3</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          {address ? (
            <>
              <div className="my-3 flex-center text-lg font-bold">{shorten(address)}</div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    disconnect()
                    props.close?.()
                  }}
                  className="w-full flex-center"
                  size="sm"
                  variant="secondary"
                >
                  Disconnect
                </Button>

                <Button
                  onClick={() => {
                    copyHandler(address)
                    setCopyText('Copied!')
                    setTimeout(() => setCopyText('Copy Address'), 2000)
                  }}
                  className="w-full flex-center"
                  size="sm"
                  variant="secondary"
                >
                  {copyText}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-col-center">
              {connectors.map((connector) => (
                <Button
                  key={connector.id}
                  onClick={async () => {
                    setPendingConnectorId(connector.id)
                    await connectAsync({
                      connector,
                    })
                    props.close?.()
                  }}
                  className="mb-3 w-full"
                  size="lg"
                >
                  {connector.name}
                  {/* {!connector.ready && ' (unsupported)'} */}
                  {isConnecting && connector.id === pendingConnectorId && ' (connecting)'}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
