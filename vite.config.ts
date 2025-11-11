import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	return {
		plugins: [react(), tailwindcss()],
		resolve: {
			alias: {
				"@app": path.resolve(__dirname, "src/app"),
				"@pages": path.resolve(__dirname, "src/pages"),
				"@shared": path.resolve(__dirname, "src/shared"),
				"@entities": path.resolve(__dirname, "src/entities"),
				"@features": path.resolve(__dirname, "src/features"),
				"@widgets": path.resolve(__dirname, "src/widgets"),
			},
			server: {
				proxy: {
					"/api": {
						target: env.VITE_API_URL,
						changeOrigin: true,
						secure: false,
						rewrite: (path: string) => path.replace(/^\/api/, ""),
					},
				},
			},
			extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
		},
	}
})
