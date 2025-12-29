import "./globals.css";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold">
              {site.name}
            </Link>
            <nav className="flex gap-4 text-sm text-zinc-600">
              <Link href="/projects" className="hover:text-zinc-900">Projects</Link>
              <Link href="/experience" className="hover:text-zinc-900">Experience</Link>
              <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </div>
        </footer>
      </body>
    </html>
  );
}