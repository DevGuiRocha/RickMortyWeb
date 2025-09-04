// src/app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Rick & Morty — Home",
  description: "Lista de personagens (MVP placeholder)",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Rick & Morty App</h1>
        <p className="text-sm opacity-80">
          MVP: rotas básicas e placeholders
        </p>
      </header>

      <section className="space-y-4">
        <p>
          Em breve: grid de personagens com filtros e paginação.
        </p>
        <div className="flex items-center gap-4">
          <Link
            className="rounded-xl border px-4 py-2 hover:bg-black/5"
            href="/characters/1"
          >
            Ver exemplo de personagem (ID 1)
          </Link>
        </div>
      </section>
    </main>
  );
}
