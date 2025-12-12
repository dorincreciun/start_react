import { type FC, type ReactNode, useEffect, useState } from "react"

import ReactDOM from "react-dom"

interface IPortalProps {
    children: ReactNode
}

export const Portal: FC<IPortalProps> = ({ children }) => {
    const [container] = useState((): HTMLDivElement => document.createElement("div"))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}
