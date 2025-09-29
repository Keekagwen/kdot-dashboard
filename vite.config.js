import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ⬇️ change to your repo name if different
  base: "/kdot-project-admin/",
});
