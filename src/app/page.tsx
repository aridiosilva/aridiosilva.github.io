import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Bio / Positioning */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">
          Aridio Silva
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          AI Researcher & Systems Engineer focado em <strong className="text-white font-semibold">Governança de Agentes Autônomos</strong>, 
          arquiteturas de <strong class="text-white font-semibold">memória de longo prazo</strong> e <strong class="text-white font-semibold">avaliação de sistemas de IA</strong>.
        </p>
        <p className="text-sm text-slate-400">
          Investigando mecanismos de contenção, orquestração multiagente, integração via Model Context Protocol (MCP) e auditoria de decisões.
        </p>
      </section>

      {/* Latest Writing */}
      <section className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <h2 className="text-xl font-semibold text-slate-200">Latest Writing</h2>
          <Link href="/blog" className="text-xs font-mono text-blue-400 hover:underline">
            Ver todos →
          </Link>
        </div>

        <div className="space-y-6">
          <article className="border-l-2 border-slate-800 pl-4 hover:border-blue-500 transition-colors">
            <span className="text-xs font-mono text-slate-500">15 SET 2026 • 8 MIN READ</span>
            <h3 className="text-lg font-medium text-slate-100 hover:text-blue-400 mt-1">
              <Link href="/blog/governance-autonomous-agents">
                Governança e Orquestração de Agentes Autônomos em Produção
              </Link>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Análise detalhada sobre camadas de controle em tempo de execução, guardrails determinísticos e auditabilidade em workflows MCP.
            </p>
          </article>

          <article className="border-l-2 border-slate-800 pl-4 hover:border-blue-500 transition-colors">
            <span className="text-xs font-mono text-slate-500">02 SET 2026 • 12 MIN READ</span>
            <h3 className="text-lg font-medium text-slate-100 hover:text-blue-400 mt-1">
              <Link href="/blog/long-term-memory-mcp-evals">
                Benchmarking Long-Term Memory & Context Retrieval
              </Link>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Comparando soluções de Knowledge Graphs com vetores densos para retenção de contexto de longo prazo em tarefas de raciocínio.
            </p>
          </article>
        </div>
      </section>

      {/* Featured Research / Projects */}
      <section className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <h2 className="text-xl font-semibold text-slate-200">Featured Research & Projects</h2>
          <Link href="/projects" className="text-xs font-mono text-blue-400 hover:underline">
            Ver projetos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors space-y-2">
            <span className="text-xs font-mono text-blue-400">RESEARCH PAPER</span>
            <h3 className="font-medium text-slate-100">Autonomous Agent Governance Framework</h3>
            <p className="text-xs text-slate-400">Arquitetura de controle para auditoria e limitação de escopo em sistemas de IA autônomos.</p>
            <div className="pt-2 flex gap-3 text-xs font-mono text-slate-400">
              <a href="#" class="hover:text-slate-200">[PDF Draft]</a>
              <a href="#" class="hover:text-slate-200">[GitHub]</a>
            </div>
          </div>

          <div className="p-4 rounded border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors space-y-2">
            <span className="text-xs font-mono text-emerald-400">BENCHMARK / TOOL</span>
            <h3 className="font-medium text-slate-100">MCP Agent Memory Benchmark (MAM-Bench)</h3>
            <p className="text-xs text-slate-400">Dataset e suíte de testes para avaliação de persistência e acurácia de memória em agentes.</p>
            <div className="pt-2 flex gap-3 text-xs font-mono text-slate-400">
              <a href="#" class="hover:text-slate-200">[Dataset]</a>
              <a href="#" class="hover:text-slate-200">[Code]</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}