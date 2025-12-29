import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="space-y-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-2xl border p-5 hover:bg-zinc-50">
            <div className="font-medium">{p.title}</div>
            <div className="mt-1 text-sm text-zinc-600">{p.summary}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}