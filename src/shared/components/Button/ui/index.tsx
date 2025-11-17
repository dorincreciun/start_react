import type { FC } from "react"

import type { IButtonProps } from "@shared/components/Button/model/interface"
import { buttonVr } from "@shared/components/Button/styles/button-vr"
import { Spinner } from "@shared/components/Button/ui/Spinner"
import { cn } from "@shared/utils/cn"

export const Button: FC<IButtonProps> = ({
	kind,
	size,
	isLoading,
	iconOnly,
	children,
	badge,
	className,
	color,
	...rest
}) => {
	const btnClass = buttonVr({ kind, size, isLoading, iconOnly, color })

	return (
		<button
			className={cn("relative", btnClass, className)}
			{...rest}
		>
			<span className={cn(isLoading ? "animate-fade-out" : "animate-fade-in")}>{children}</span>

			{badge && <div className={cn("badge", isLoading ? "animate-fade-out" : "animate-fade-in")}>{badge}</div>}

			<Spinner className={cn("spinner", isLoading ? "animate-spinner-in" : "animate-spinner-out")} />
		</button>
	)
}
