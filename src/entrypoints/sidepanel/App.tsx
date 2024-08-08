import { Toaster } from 'sonner'
import { useAccount } from 'wagmi'

import { InitConnect } from '@/components/home/HomeMisc'
import { Header } from '@/components/layout/header'

export function App() {
  const { address } = useAccount()

  return (
    <div className="mx-auto overflow-y-auto bg-background pb-8">
      <Header action={<InitConnect type="header" />} />

      {address ? <div className="flex-col-center pt-8 font-[Figtree] space-y-4.5" /> : <InitConnect />}

      <Toaster position="top-center" />
    </div>
  )
}
