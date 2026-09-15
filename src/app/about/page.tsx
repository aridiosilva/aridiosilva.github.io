export default function About() {
  return (
    <div className="space-y-8 text-slate-300 leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight text-slate-100">About & Research Background</h1>

      <section className="space-y-4">
        <p>
          My professional career in software development began in <strong className="text-white">1977</strong>, providing a long-term perspective on the architectural evolution of distributed systems, security engineering, and Artificial Intelligence.
        </p>
        <p>
          I am an independent researcher based in Brazil. My current work explores the convergence of <strong className="text-white">Agentic AI, Multi-Agent Systems, Edge AI, Zero-Trust Architecture, AI Security, Governance, Risk and Compliance (GRC)</strong>, and <strong className="text-white">Security-by-Design</strong>.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-slate-800">
        <h2 className="text-xl font-semibold text-slate-100">Open Research Philosophy</h2>
        <p className="text-sm">
          Security and governance should be treated as fundamental architectural properties of autonomous AI systems rather than controls added post-deployment. My work follows an open research and reproducible engineering approach, combining conceptual architectures, formal specifications, threat models, security invariants, executable evidence, and reference implementations.
        </p>
      </section>

      {/* Research Profiles & IDs */}
      <section className="space-y-4 pt-4 border-t border-slate-800">
        <h2 className="text-xl font-semibold text-slate-100">Research Profiles & Artifacts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono">
          <a href="https://orcid.org/0009-0008-2411-6995" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">ORCID</span>
            <span className="text-blue-400">0009-0008-2411-6995</span>
          </a>

          <a href="https://doi.org/10.5281/zenodo.22557796" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">Zenodo DOI</span>
            <span className="text-blue-400">10.5281/zenodo.22557796</span>
          </a>

          <a href="https://scholar.google.com/citations?user=rPn5O48AAAAJ" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">Google Scholar</span>
            <span className="text-blue-400">rPn5O48AAAAJ</span>
          </a>

          <a href="https://github.com/aridiosilva" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">GitHub</span>
            <span className="text-blue-400">@aridiosilva</span>
          </a>

          <a href="https://www.linkedin.com/in/aridio-silva-74997111/" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">LinkedIn</span>
            <span className="text-blue-400">aridio-silva</span>
          </a>

          <a href="https://medium.com/@aridiosilva" target="_blank" className="p-3 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/30 flex justify-between items-center">
            <span className="text-slate-400">Medium</span>
            <span className="text-blue-400">@aridiosilva</span>
          </a>
        </div>
      </section>
    </div>
  );
}