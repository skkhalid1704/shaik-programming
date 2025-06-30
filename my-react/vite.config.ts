import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "onlineexpress-local.jlg.com",
    port: 5177,
    strictPort: true,
    open: true,
  },
});
