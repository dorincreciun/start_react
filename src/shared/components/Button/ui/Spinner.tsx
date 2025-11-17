import type { FC } from "react"

import type { ISpinnerProps } from "@shared/components/Button/model/interface"
import { cn } from "@shared/utils/cn"

export const Spinner: FC<ISpinnerProps> = ({ size = 20, className }) => {
	return (
		<svg
			aria-hidden="true"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			className={cn("absolute top-1/2 left-1/2 z-10 -translate-1/2 text-current", className)}
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
				fill="none"
			/>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 0 1 8-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 0 1 4 12H2c0
           3.042 1.135 5.824 3 7.938l1-2.647z"
			/>
		</svg>
	)
}
