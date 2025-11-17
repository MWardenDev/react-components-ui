import { MetricCard } from "./components/MetricCard"
import { SectionHeader } from "./components/SectionHeader"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold">React Components UI</h1>
          <p className="text-sm text-slate-400 mt-1">
            A small library of reusable React + TypeScript UI components used
            across my portfolio projects.
          </p>
        </header>

        {/* Section: MetricCard */}
        <section className="mb-10">
          <SectionHeader
            title="MetricCard"
            subtitle="Reusable metric display card for dashboards."
          />

          <p className="text-xs text-slate-400 mb-3">
            Below are three examples of the <code>MetricCard</code> component
            with different props:
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-dashed border-slate-700 rounded-lg p-2">
              <p className="text-[11px] text-slate-500 mb-1">
                <code>&lt;MetricCard /&gt; example #1</code>
              </p>
              <MetricCard
                label="GitHub Stars"
                value="–"
                description="Designed to show aggregate stars across selected repos."
                footer="Used in: React Metrics Dashboard (planned integration)."
              />
            </div>

            <div className="border border-dashed border-slate-700 rounded-lg p-2">
              <p className="text-[11px] text-slate-500 mb-1">
                <code>&lt;MetricCard /&gt; example #2</code>
              </p>
              <MetricCard
                label="Open Issues"
                value={12}
                description="Could display open issues across key repositories."
              />
            </div>

            <div className="border border-dashed border-slate-700 rounded-lg p-2">
              <p className="text-[11px] text-slate-500 mb-1">
                <code>&lt;MetricCard /&gt; example #3</code>
              </p>
              <MetricCard
                label="Deploys Today"
                value={3}
                description="Useful for CI/CD summaries."
                footer="This data is mocked for now."
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader
            title="Planned Components"
            subtitle="Additional reusable UI pieces to be added over time."
          />
          <ul className="list-disc list-inside text-sm text-slate-400">
            <li>Badge / Tag</li>
            <li>Section layout wrappers</li>
            <li>Chart container components</li>
            <li>Skeleton loaders / shimmer placeholders</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
