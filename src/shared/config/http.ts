import createClient from "openapi-fetch";

export const http = createClient({
    baseUrl: import.meta.env.VITE_API_URL,
});