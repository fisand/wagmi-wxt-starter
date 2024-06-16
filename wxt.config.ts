import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { defineConfig } from 'wxt'
// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [
      react(),
      UnoCSS(),
      nodePolyfills(),
      AutoImport({
        imports: ['react'],
        dts: './auto-imports.d.ts',
      }),
    ],
    optimizeDeps: {
      include: ['extension-port-stream'],
    },
  }),
  manifest: {
    permissions: ['storage', 'sidePanel'],
    action: {
      default_title: 'Click to open oracle panel',
    },
    web_accessible_resources: [
      {
        resources: ['fonts/*.ttf'],
        matches: ['*://*/*'],
      },
    ],
  },
})
