import Image from 'next/image'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function WebDev({ lang }: Props) {
  const t = T[lang].webdev

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      {/* Background photo (light mode only) */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <Image
          src="/images/fotodelsur1.webp"
          alt="Ballena franca austral nadando en aguas profundas — desarrollo web orientado a conseguir más clientes"
          fill
          className="object-cover"
          style={{ objectPosition: 'right top', opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, var(--bg) 0%, var(--bg) 45%, rgba(250,248,244,0.6) 70%, transparent 100%)' }}
        />
      </div>

      {/* Background photo (dark mode only) */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <Image
          src="/images/fotodelsur.webp"
          alt="Ballena franca austral sumergiéndose en aguas turquesas — desarrollo web y publicidad para más clientes"
          fill
          className="object-cover"
          style={{ objectPosition: 'right top', opacity: 0.18 }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--bg)', opacity: 0.75 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
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
