import type { ReactNode } from "react"

interface MetricCardProps {
  label: string
  value: string | number
  description?: string
  footer?: ReactNode
}

export function MetricCard({
  label,
  value,
  description,
  footer,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
        {label}
      </p>
      <p className="text-3xl font-semibold text-slate-50">{value}</p>
      {description && (
        <p className="mt-2 text-xs text-slate-400">{description}</p>
      )}
      {footer && (
        <div className="mt-3 pt-2 border-t border-slate-800 text-xs text-slate-400">
          {footer}
        </div>
      )}
    </div>
  )
}
