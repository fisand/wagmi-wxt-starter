import { erc20Abi } from 'viem'
import { sepolia } from 'viem/chains'
import { useAccount } from 'wagmi'

import { ABI } from '@/constants'
import { OPEN_ADDRESS } from '@/constants/address'

export function useOpenContract() {
  const { chainId } = useAccount()

  return useMemo(
    () => ({
      address: OPEN_ADDRESS[chainId ?? sepolia.id],
      abi: ABI,
    }),
    [chainId],
  )
}

export function useUSDCContract(tokenAddress: `0x${string}`) {
  return useMemo(
    () => ({
      address: tokenAddress,
      abi: erc20Abi,
    }),
    [tokenAddress],
  )
}
