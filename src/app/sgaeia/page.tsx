export default function SGAEIAPage() {
  return (
    <div className="space-y-8 text-slate-300 leading-relaxed">
      <div>
        <span className="text-xs font-mono text-blue-400">OPEN RESEARCH ARTIFACT</span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100 mt-1">SGAEIA</h1>
        <p className="text-sm font-mono text-slate-400 mt-1">
          Secure Governed Autonomous Edge Intelligence Architecture
        </p>
      </div>

      <div className="p-4 rounded bg-slate-900 border border-slate-800 font-mono text-xs flex flex-wrap gap-4 text-slate-400">
        <div>DOI: <a href="https://doi.org/10.5281/zenodo.22557796" target="_blank" className="text-blue-400 hover:underline">10.5281/zenodo.22557796</a></div>
        <div>Repository: <a href="https://github.com/aridiosilva/SGAEIA" target="_blank" className="text-blue-400 hover:underline">github.com/aridiosilva/SGAEIA</a></div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-100 border-b border-slate-800 pb-2">Overview</h2>
        <p>
          SGAEIA is an open and vendor-neutral reference architecture for governed distributed multi-agent systems. It investigates the transition from conventional Edge AI toward <strong>Governed Autonomous Edge Intelligence</strong>.
        </p>
        <p>
          In this model, AI agents perceive, reason, communicate, delegate, and act across heterogeneous edge-cloud infrastructures while remaining strictly constrained by enforceable security and governance policies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-100 border-b border-slate-800 pb-2">Core Explorations & Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 font-mono">
          <li>Bounded and revocable agent authority</li>
          <li>Authenticated and traceable delegation</li>
          <li>Zero-Trust runtime enforcement</li>
          <li>Multi-agent trust boundaries</li>
          <li>Continuous Governance, Risk and Compliance (GRC)</li>
          <li>Security-by-Design & Shift-Left engineering</li>
          <li>STRIDE & OWASP threat modeling</li>
          <li>Evidence-as-Code & continuous assurance</li>
          <li>Hierarchical Edge AI architectures</li>
        </ul>
      </section>
    </div>
  );
}