import Image from 'next/image'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Process({ lang }: Props) {
  const t = T[lang].process

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--warm)' }}>
      {/* Background photo (dark mode only) */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <Image
          src="/images/fotodelsur2.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.2 }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--warm)', opacity: 0.78 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <h2
          className="font-oswald font-bold uppercase mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
        >
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {t.steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop) */}
              {i < t.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px"
                  style={{ background: 'var(--border)', zIndex: 0 }}
                />
              )}

              <span
                className="block font-oswald font-bold mb-4"
                style={{ fontSize: '48px', color: 'var(--border)', lineHeight: 1 }}
              >
                {step.num}
              </span>
              <h3
                className="font-oswald font-medium mb-3"
                style={{ fontSize: '20px', color: 'var(--ink)' }}
              >
                {step.title}
              </h3>
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: 'var(--mid)' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
