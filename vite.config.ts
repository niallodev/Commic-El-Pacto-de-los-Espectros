import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Commic-El-Pacto-de-los-Espectros/', // Reemplaza con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'build', // Cambia el nombre de la carpeta generada
  },
})
