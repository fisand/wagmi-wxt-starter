import { shorten } from '@did-network/dapp-sdk'
import { useAccount } from 'wagmi'

import { cn } from '@/utils'

import { Button } from '../ui/button'
import { WalletModal } from '../web3/WalletModal'

export function InitConnect({ type }: { type?: 'header' }) {
  const { address } = useAccount()

  const [show, setShow] = useState(false)
  const toggleModal = (e: boolean) => {
    setShow(e)
  }

  return (
    <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
      {({ isLoading }) => (
        <Button
          size={type === 'header' ? 'default' : 'lg'}
          className={cn(
            'mt-40vh flex items-center font-[Figtree]',
            type === 'header' ? '!mt-0 rounded-full h-7 text-xs' : 'mx-auto text-base',
          )}
        >
          {isLoading ? (
            <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-white" />
          ) : null}
          {address ? shorten(address, 6, 6) : 'Connect Wallet'}
        </Button>
      )}
    </WalletModal>
  )
}
