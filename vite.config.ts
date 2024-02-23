import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import { createHtmlPlugin } from "vite-plugin-html"
import 'dotenv/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    sourcemap: true,
  },
  define: {
    bridgeVersion: JSON.stringify(process.env.npm_package_version),   
  },
  plugins: [
    react({
      fastRefresh: false,
    }),
    svgr(),
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      overlay: false,
      typescript: true,
    }),
    createHtmlPlugin({
      inject: {
        data: {
          metaTags: `<meta
          name="description"
          content="Simple user interface to bridge ETH and your favorite ERC-20 tokens from Ethereum to the ${process.env.VITE_REPLACE_NAME} and back"
          />`,
          title: `<title>${process.env.VITE_REPLACE_NAME} Bridge</title>`,
        },
      },
    }),
  ],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    open: true,
  },
});
