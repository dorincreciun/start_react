export const FallBackPage = () => {
    return (
        <>
            <main className="grid min-h-screen place-items-center p-6">
                <section className="flex w-full max-w-sm flex-col items-center gap-3 p-6">
                    <h1 className="text-center text-base leading-tight font-semibold">404</h1>
                    <p className="max-w-xs text-center text-sm leading-snug">
                        Pagina pe care o cauți nu a fost găsită sau nu este disponibilă momentan.
                    </p>
                </section>
            </main>
        </>
    )
}
