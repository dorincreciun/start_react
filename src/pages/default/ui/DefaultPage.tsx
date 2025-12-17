import { Dropdown } from "@shared/ui"

export const DefaultPage = () => {
    return (
        <div className={"flex min-h-screen items-center justify-center"}>
            <Dropdown.Root>
                <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
                <Dropdown.Body>Dropdown body</Dropdown.Body>
            </Dropdown.Root>
        </div>
    )
}
