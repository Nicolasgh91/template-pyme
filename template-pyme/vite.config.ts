import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Puerto 5174 para no chocar con el demo menú digital (remix), que suele usar 5173.
// En el portfolio, `.env.local`: PUBLIC_TEMPLATE_PYME_URL=http://localhost:5174
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  preview: { port: 5174 },
})
