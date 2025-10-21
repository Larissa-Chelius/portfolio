import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Larissa Chelius — Portfolio",
  description: "I build fast, human-centered web tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Larissa Chelius</Link>
          <nav className="flex gap-2">
            <Link href="/" className="px-3 py-2 rounded hover:bg-slate-800">Home</Link>
            <Link href="/projects" className="px-3 py-2 rounded hover:bg-slate-800">Projects</Link>
            <Link href="/about" className="px-3 py-2 rounded hover:bg-slate-800">About</Link>
            <Link href="/resume" className="px-3 py-2 rounded hover:bg-slate-800">Resume</Link>
            <Link href="/contact" className="px-3 py-2 rounded hover:bg-slate-800">Contact</Link>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

        <footer className="max-w-5xl mx-auto px-6 py-8 opacity-70 text-sm">
          © {new Date().getFullYear()} Larissa Chelius
        </footer>
      </body>
    </html>
  );
}
