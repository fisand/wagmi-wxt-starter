// main.ts
import '@/assets/style/index.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'

import { App } from './App.tsx'
import { config } from './wagmi.config.ts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <WagmiProvider config={config} reconnectOnMount={false}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </WagmiProvider>,
)
