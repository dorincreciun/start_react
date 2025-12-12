import * as path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                "@app": path.resolve(__dirname, "src/app"),
                "@processes": path.resolve(__dirname, "src/processes"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@shared": path.resolve(__dirname, "src/shared"),
                "@entities": path.resolve(__dirname, "src/entities"),
                "@features": path.resolve(__dirname, "src/features"),
                "@widgets": path.resolve(__dirname, "src/widgets"),
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
        },
        define: {
            __API_URL__: JSON.stringify(env.VITE_API_URL),
        },
    }
})
