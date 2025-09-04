import Link from "next/link";

type PageProps = {
    params: { id: string };
};

export async function generateMetadata({ params }: PageProps) {
    return {
        title: `Character #${params.id} - Rick & Morty`
    };
}

export default async function CharacterPage({ params }: PageProps) {
    const { id } = params;

    return (
        <main className="mx-auto max-w-3xl p-6">
            <nav className="mb-6">
                <Link className="rounded-xl border px-4 py-2 hover:bg-black/5" href="/">
                    ← Voltar
                </Link>
            </nav>

            <h1 className="mb-2 text-2xl font-semibold">
                Personagem #{id}
            </h1>
            <p className="opacity-80">
                Aqui exibiremos: imagem, status, espécie, gênero, origem, localização atual e episódios.
            </p>

            <div className="mt-6 rounded-2xl border p-4">
                <p className="text-sm opacity-70">
                    Placeholder do MVP. Próximo passo: implementar fetch SSR/SSG e UI definitiva.
                </p>
            </div>
        </main>
    )
}