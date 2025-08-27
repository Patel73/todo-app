// // export default {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // }


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// })



import tailwind from "@tailwindcss/postcss";

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
