import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Slanka Taxi - Sri Lanka Transport & Safari",
        short_name: "Slanka Taxi",
        description: "Sri Lanka's #1 taxi service for airport transfers, Yala safari, and tourist transport. Book reliable, safe & affordable rides.",
        theme_color: "#0B7AB5",
        background_color: "#0B7AB5",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/pwa-64x64.svg",
            sizes: "64x64",
            type: "image/svg+xml",
          },
          {
            src: "/pwa-192x192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/pwa-512x512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/pwa-maskable-192x192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "maskable",
          },
          {
            src: "/pwa-maskable-512x512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
        categories: ["travel", "transport", "tourism"],
        shortcuts: [
          {
            name: "Book Airport Transfer",
            short_name: "Airport",
            description: "Book Colombo airport taxi",
            url: "/airport-transfer-sri-lanka",
          },
          {
            name: "Book Yala Safari",
            short_name: "Safari",
            description: "Book Yala safari",
            url: "/yala-safari",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/api\./,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5, // 5 minutes
              },
            },
          },
        ],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
