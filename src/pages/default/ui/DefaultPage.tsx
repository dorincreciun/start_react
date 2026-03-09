import { Search } from "lucide-react"

import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input"

export const DefaultPage = () => {
    return (
        <div className={"flex min-h-screen items-center justify-center"}>
            <Button>Cauta</Button>
            <Input size="md">
                <Input.Icon>
                    <Search size={16} />
                </Input.Icon>
                <Input.Field placeholder="Caută..." />
                <Input.Addon>⌘K</Input.Addon>
            </Input>
        </div>
    )
}
