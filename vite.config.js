// // vite.config.js
// import { defineConfig } from 'vite'
// import tailwindcss from 'tailwindcss'

// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [
//         tailwindcss({
//           theme: {
//             extend: {
//               colors: {
//                 primary: '#10214b',
//                 accent: '#d7bd88',
//                 section: '#d0c3ba',
//                 light: '#ebe7e1',
//               },
//             },
//           },
//         }),
//       ],
//     },
//   },
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
})
