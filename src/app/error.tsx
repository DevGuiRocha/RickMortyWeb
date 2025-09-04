"use client";

export default function RootError({ error }: { error: Error }) {
    return (
        <div className="p-6 text-red-600">
            Algo deu errado: {error.message}
        </div>
    )
}