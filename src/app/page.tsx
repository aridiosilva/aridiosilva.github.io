import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Position & Core Question */}
      <section className="space-y-4">
        <div className="inline-block px-2.5 py-1 text-xs font-mono bg-blue-950/80 text-blue-400 rounded border border-blue-800/60">
          Independent Researcher • Brazil
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">
          Aridio Silva
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Focusing on the architectural, security, and governance challenges of{' '}
          <strong className="text-blue-400 font-semibold">autonomous, distributed AI systems</strong>,{' '}
          <strong className="text-blue-400 font-semibold">Agentic AI</strong>, and{' '}
          <strong className="text-blue-400 font-semibold">Edge Intelligence</strong>.
        </p>
        
        <blockquote className="p-4 border-l-2 border-blue-500 bg-slate-900/80 text-sm text-slate-200 italic rounded-r">
          &ldquo;How can autonomous AI systems be granted enough authority to perform useful actions while ensuring that such authority remains bounded, verifiable, auditable, and revocable?&rdquo;
        </blockquote>
      </section>

      {/* Featured Architecture: SGAEIA */}
      <section className="p-6 rounded-lg border border-blue-900/80 bg-slate-900/90 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">Lead Research & Reference Architecture</span>
            <h2 className="text-2xl font-bold text-slate-100 mt-1">SGAEIA</h2>
            <p className="text-xs text-slate-400 font-mono">Secure Governed Autonomous Edge Intelligence Architecture</p>
          </div>
          <a 
            href="https://doi.org/10.5281/zenodo.22557796" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-mono bg-slate-800 text-blue-300 px-3 py-1.5 rounded border border-slate-700 hover:bg-slate-700 transition-colors"
          >
            DOI: 10.5281/zenodo.22557796
          </a>
        </div>
        
        <p className="text-sm text-slate-300 leading-relaxed">
          An open and vendor-neutral reference architecture investigating the transition toward Governed Autonomous Edge Intelligence. Enables AI agents to perceive, reason, and act across edge-cloud infrastructures constrained by Zero-Trust runtime policy enforcement.
        </p>

        <div className="flex gap-6 pt-2 text-xs font-mono">
          <a href="https://github.com/aridiosilva/SGAEIA" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline font-semibold">
            [GitHub Repository] →
          </a>
          <Link href="/sgaeia" className="text-slate-400 hover:text-slate-100 transition-colors">
            [Read Architecture Overview]
          </Link>
        </div>
      </section>

      {/* Research Domains Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-100 border-b border-slate-800 pb-2">Primary Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-slate-200">
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">Agentic & Multi-Agent AI</div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">Zero-Trust Architecture</div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">Edge AI & Distributed Systems</div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">AI Governance & GRC</div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">STRIDE & OWASP Threat Models</div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800 font-medium">Evidence-as-Code</div>
        </div>
      </section>
    </div>
  );
}