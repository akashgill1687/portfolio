import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <p className="text-zinc-700">{p.summary}</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border px-3 py-1 text-xs text-zinc-700">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Highlights</h2>
        <ul className="list-disc space-y-1 pl-5 text-zinc-700">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}