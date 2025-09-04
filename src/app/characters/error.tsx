"use client";

export default function CharactersError({ error }: { error: Error }) {
    return <div className="p-6 text-red-600">Erro: {error.message}</div>;
}