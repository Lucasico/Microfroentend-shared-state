import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const deps = require("./package.json").dependencies;

const REMOTE_ENTRIES_PATH = {
  store: "http://localhost:5003/assets/remoteEntry.js",
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header_app",
      filename: "remoteEntry.js",
      remotes: {
        StoreModule: REMOTE_ENTRIES_PATH.store,
      },
      exposes: {
        "./Header": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
