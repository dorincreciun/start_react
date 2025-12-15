import { type HTMLAttributes, type ReactElement } from "react"

export type TabsValue = string | number

export interface TabsContextValue {
    activeValue: TabsValue
    changeTab: (value: TabsValue) => void
}

export interface TabsTriggerListProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: ReactElement<TabsTriggerProps> | ReactElement<TabsTriggerProps>[]
}

export interface TabsTriggerProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
    value: TabsValue
}

export interface TabsContentListProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactElement<TabsContentProps> | ReactElement<TabsContentProps>[]
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
    value: TabsValue
}

type TriggerElement = ReactElement<TabsTriggerListProps>
type ContentElement = ReactElement<TabsContentListProps>

export type TabsChildren = [TriggerElement, ContentElement] | [ContentElement, TriggerElement]

export interface TabsRootProps {
    defaultValue?: TabsValue
    value?: TabsValue
    onValueChange?: (value: TabsValue) => void
    children: TabsChildren
}
