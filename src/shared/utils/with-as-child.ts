import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ReactElement,
	type ReactNode,
	cloneElement,
	createElement,
	isValidElement,
} from "react"

import { cn } from "@shared/utils/cn"

type RenderWithAsChildProps<C extends ElementType> = {
	asChild?: boolean
	Component: C
	children?: ReactNode
	className?: string
} & Omit<ComponentPropsWithoutRef<C>, "children" | "className">

export function renderWithAsChild<C extends ElementType>(props: RenderWithAsChildProps<C>) {
	const { asChild, Component, children, className, ...rest } = props

	if (!asChild) {
		return createElement(Component, { ...rest, className }, children)
	}

	if (!children || !isValidElement<{ className?: string }>(children)) {
		if (process.env.NODE_ENV !== "production") {
			console.warn("[renderWithAsChild] `asChild` este true, dar `children` nu este un element React valid.")
		}
		return null
	}

	const child = children as ReactElement<{ className?: string }>

	const mergedClassName = cn(child.props.className, className)

	return cloneElement(child, {
		...rest,
		className: mergedClassName,
	})
}
