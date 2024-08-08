import { useAccount, useSwitchChain } from 'wagmi'

import { cn } from '@/utils'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export function NetworkSwitcher() {
  const { chains, switchChain, isPending } = useSwitchChain()
  const { chain, isConnected } = useAccount()
  const defaultValue = useMemo(() => chain?.id.toString(), [chain?.id])

  const [pendingChainId, setPendingChainId] = useState<number>()

  return (
    <Select
      onValueChange={(val) => {
        setPendingChainId(+val)
        switchChain({
          chainId: Number(val),
        })
      }}
      defaultValue={defaultValue}
      value={defaultValue}
    >
      <SelectTrigger
        className={cn(
          'h-8 max-w-35',
          isConnected && !chain?.name
            ? 'text-destructive border-destructive !outline-[transparent] !shadow-[destructive]'
            : '',
        )}
      >
        <SelectValue>
          <span className="flex-center">
            {isPending && (
              <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-primary" />
            )}
            {' '}
            {isConnected ? chain?.name ?? 'Error Net' : 'Select'}
          </span>
        </SelectValue>
        {!chain && 'Error Network'}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {chains.map(x =>
            x.id === chain?.id
              ? null
              : (
                  <SelectItem value={`${x.id}`} key={x.id} className="">
                    <span className="flex-center">
                      {isPending && x.id === pendingChainId && (
                        <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-primary" />
                      )}
                      {' '}
                      {x.name}
                    </span>
                  </SelectItem>
                ),
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
