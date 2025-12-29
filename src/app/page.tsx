import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects;

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold">{site.name}</h1>
        <p className="text-lg text-zinc-600">{site.title}</p>
        <p className="max-w-2xl text-zinc-700">{site.tagline}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {site.focus.map((t) => (
            <span key={t} className="rounded-full border px-3 py-1 text-xs text-zinc-700">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <Link href="/projects" className="text-sm font-medium underline underline-offset-4">
            View projects
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border p-5 hover:bg-zinc-50"
            >
              <div className="font-medium">{p.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{p.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}