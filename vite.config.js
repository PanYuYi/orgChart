import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueSetupExtend(), vue()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    cors: true,
    host: "0.0.00",
  },
});
