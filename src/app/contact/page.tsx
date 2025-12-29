import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-zinc-700">Best way to reach me:</p>

      <ul className="space-y-2 text-zinc-700">
        <li>Email: <a className="underline" href={`mailto:${site.links.email}`}>{site.links.email}</a></li>
        <li>Resume: <a className="underline" href="/resume.pdf" target="_blank" rel="noreferrer">Download PDF</a></li>
        {site.links.github ? <li>GitHub: <a className="underline" href={site.links.github} target="_blank" rel="noreferrer">{site.links.github}</a></li> : null}
        {site.links.linkedin ? <li>LinkedIn: <a className="underline" href={site.links.linkedin} target="_blank" rel="noreferrer">{site.links.linkedin}</a></li> : null}
      </ul>
    </div>
  );
}