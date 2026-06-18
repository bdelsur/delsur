import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function WebDev({ lang }: Props) {
  const t = T[lang].webdev

  return (
    <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header — visually subordinate to Services */}
        <p
          className="font-dm text-xs uppercase tracking-widest mb-3"
          style={{ color: 'var(--soft)' }}
        >
          Desarrollo web
        </p>
        <h2
          className="font-oswald font-medium mb-4"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: 'var(--ink)' }}
        >
          {t.supra}
        </h2>
        <p
          className="font-dm font-light max-w-2xl mb-12 leading-relaxed"
          style={{ fontSize: '15px', color: 'var(--mid)' }}
        >
          {t.desc}
        </p>

        {/* Four options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-8" style={{ border: '1px solid var(--border)' }}>
          {t.options.map((opt, i) => (
            <div
              key={i}
              className="p-6 md:p-8"
              style={{ background: 'var(--card)' }}
            >
              <h3
                className="font-dm font-medium mb-3"
                style={{ fontSize: '15px', color: 'var(--ink)' }}
              >
                {opt.title}
              </h3>
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: 'var(--mid)' }}
              >
                {opt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Maintenance block */}
        <div
          className="p-6 border-l-2"
          style={{ background: 'var(--warm)', borderLeftColor: 'var(--border)' }}
        >
          <p className="font-dm font-medium mb-1" style={{ fontSize: '14px', color: 'var(--ink)' }}>
            {t.maintenance.title}
          </p>
          <p className="font-dm font-light text-sm leading-relaxed" style={{ color: 'var(--mid)' }}>
            {t.maintenance.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
