import { create } from "zustand/react"

import type { ILoaderStore } from "@shared/components/Loader/model/interface"

export const useLoaderStore = create<ILoaderStore>()((set, get) => ({
	isLoading: false,
	activeRequests: 0,

	startLoading: () => {
		const next = get().activeRequests + 1
		set({ isLoading: true, activeRequests: next })
	},

	stopLoading: () => {
		const next = Math.max(0, get().activeRequests - 1)
		set({ activeRequests: next, isLoading: next > 0 })
	},
}))
