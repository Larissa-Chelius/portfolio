export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold">I build fast, human-centered web tools.</h1>
      <p className="max-w-2xl text-slate-300">
        CS & CogSci @ UD · React/TypeScript · clean UX and measurable impact.
      </p>
      <div className="flex gap-3">
        <a href="/projects" className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900">View Projects</a>
        <a href="/resume" className="px-4 py-2 rounded-xl ring-1 ring-slate-400">Download Resume</a>
      </div>
    </section>
  );
}
