export default function About() {
  return (
    <div className="space-y-8 text-slate-300 leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight text-slate-100">About</h1>

      <section className="space-y-4">
        <p>
          Sou pesquisador e engenheiro focado no desenvolvimento de <strong className="text-white">sistemas de Inteligência Artificial confiáveis, auditáveis e úteis</strong>. Minha investigação atual concentra-se em arquiteturas de agentes autônomos, governança de modelos em produção e integração de memória de longo prazo.
        </p>
        <p>
          Adoto a filosofia de <em>"Building in Public"</em> — unindo rigor técnico, ensaios conceituais e protótipos open-source para abordar a segurança e o alinhamento de sistemas agente-mínimos e multiagentes operando em cenários complexos.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-slate-800">
        <h2 className="text-xl font-semibold text-slate-100">Interesses de Pesquisa</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
          <li><strong className="text-slate-200">Governança de Agentes Autônomos:</strong> Mecanismos de contenção, auditabilidade e observabilidade.</li>
          <li><strong className="text-slate-200">Memória de Longo Prazo & Contexto:</strong> Integração de Knowledge Graphs e busca vetorial.</li>
          <li><strong className="text-slate-200">Model Context Protocol (MCP):</strong> Padronização de interfaces de contexto e chamadas de ferramentas.</li>
          <li><strong className="text-slate-200">Avaliação & Benchmarks:</strong> Métricas de alinhamento e robustez funcional para LLMs.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-slate-800 font-mono text-sm">
        <h2 className="text-xl font-semibold text-slate-100 font-sans">Links & Contato</h2>
        <ul className="space-y-2 text-slate-400">
          <li>Email: <a href="mailto:contact@aridiosilva.com" className="text-blue-400 hover:underline">contact@aridiosilva.com</a></li>
          <li>GitHub: <a href="https://github.com/aridiosilva" target="_blank" className="text-blue-400 hover:underline">github.com/aridiosilva</a></li>
          <li>LinkedIn: <a href="https://linkedin.com" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/aridiosilva</a></li>
        </ul>
      </section>
    </div>
  );
}