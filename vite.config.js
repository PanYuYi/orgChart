import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import path from "path";

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
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "./src/components/Topology/index.js"),
      name: "topology",
      fileName: "topology",
    },
    rollupOptions: {
      external: ["vue", "lodash"],
      output: {
        globals: {
          vue: "Vue",
          lodash: "_",
        },
      },
    },
  },
});
