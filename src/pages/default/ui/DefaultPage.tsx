import { Tabs } from "@shared/ui"

export const DefaultPage = () => {
    return (
        <div className={"flex min-h-screen items-center justify-center"}>
            <Tabs.Root defaultValue="profile">
                <Tabs.TriggerList>
                    <Tabs.Trigger value="profile">Profil</Tabs.Trigger>
                    <Tabs.Trigger value="settings">Setări</Tabs.Trigger>
                    <Tabs.Trigger value="notifications">Notificări</Tabs.Trigger>
                </Tabs.TriggerList>

                <Tabs.ContentList>
                    <Tabs.Content value="profile">
                        <h2>Informații profil</h2>
                    </Tabs.Content>
                    <Tabs.Content value="settings">
                        <h2>Setări cont</h2>
                    </Tabs.Content>
                    <Tabs.Content value="notifications">
                        <h2>Preferințe notificări</h2>
                    </Tabs.Content>
                </Tabs.ContentList>
            </Tabs.Root>
        </div>
    )
}
