import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
		proxy: {
			'/api': {
				target: 'http://192.168.1.120:8080'
			}
		}
	},
})