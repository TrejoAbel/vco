import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
export default defineConfig({
  server:{host:false},
  devToolbar:{enabled:false},
  security:{
    checkOrigin:true,
    actionBodySizeLimit:128,
    serverIslandBodySizeLimit:128
  },
  adapter:vercel()
});