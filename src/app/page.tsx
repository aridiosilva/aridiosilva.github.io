import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Position & Core Question */}
      <section className="space-y-4">
        <div className="inline-block px-2 py-1 text-xs font-mono bg-blue-950/60 text-blue-400 rounded border border-blue-800/50">
          Independent Researcher • Brazil
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">
          Aridio Silva
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Focusing on the architectural, security, and governance challenges of <strong className="text-white">autonomous, distributed AI systems</strong>, <strong className="text-white">Agentic AI</strong>, and <strong className="text-white">Edge Intelligence</strong>.
        </p>
        
        <blockquote className="p-4 border-l-2 border-blue-500 bg-slate-900/40 text-sm text-slate-300 italic">
          &ldquo;How can autonomous AI systems be granted enough authority to perform useful actions while ensuring that such authority remains bounded, verifiable, auditable, and revocable?&rdquo;
        </blockquote>
      </section>

      {/* Featured Architecture: SGAEIA */}
      <section className="p-6 rounded border border-blue-900/60 bg-blue-950/20 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Lead Research & Reference Architecture</span>
            <h2 className="text-xl font-bold text-white mt-1">SGAEIA</h2>
            <p className="text-xs text-slate-400 font-mono">Secure Governed Autonomous Edge Intelligence Architecture</p>
          </div>
          <a href="https://doi.org/10.5281/zenodo.22557796" target="_blank" className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded hover:bg-slate-700">
            DOI: 10.5281/zenodo.22557796
          </a>
        </div>
        
        <p className="text-sm text-slate-300 leading-relaxed">
          An open and vendor-neutral reference architecture investigating the transition toward Governed Autonomous Edge Intelligence. Enables AI agents to perceive, reason, and act across edge-cloud infrastructures constrained by Zero-Trust runtime policy enforcement.
        </p>

        <div className="flex gap-4 pt-2 text-xs font-mono">
          <a href="https://github.com/aridiosilva/SGAEIA" target="_blank" className="text-blue-400 hover:underline">
            [GitHub Repository] →
          </a>
          <a href="/sgaeia" className="text-slate-400 hover:text-white">
            [Read Architecture Overview]
          </a>
        </div>
      </section>

      {/* Research Domains Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-200 border-b border-slate-800 pb-2">Primary Domains</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">Agentic & Multi-Agent AI</div>
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">Zero-Trust Architecture</div>
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">Edge AI & Distributed Systems</div>
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">AI Governance & GRC</div>
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">STRIDE & OWASP Threat Models</div>
          <div className="p-3 bg-slate-900/50 rounded border border-slate-800">Evidence-as-Code</div>
        </div>
      </section>
    </div>
  );
}