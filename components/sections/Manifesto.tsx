import Image from 'next/image'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Manifesto({ lang }: Props) {
  const t = T[lang].manifesto

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: '#020202' }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/fotodelsur1.webp"
          alt="Vista aérea de una ballena franca austral en aguas oscuras del sur — DELSUR, publicidad online para conseguir más clientes"
          fill
          className="object-cover"
          style={{ opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #020202 0%, #020202 35%, rgba(2,2,2,0.4) 70%, rgba(2,2,2,0.7) 100%)' }}
        />
      </div>

      {/* Ghost SUR */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-oswald font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: 'clamp(160px, 28vw, 420px)',
          color: '#EDEDED',
          opacity: 0.018,
        }}
        aria-hidden
      >
        SUR
      </span>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl">
          <p
            className="font-oswald font-light leading-tight mb-2"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: '#A0A0A0' }}
          >
            {t.line1}
          </p>
          <p
            className="font-oswald leading-tight mb-12"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: '#EDEDED' }}
          >
            {t.line2a}
            <em style={{ color: '#FF3319', fontStyle: 'italic' }}>{t.line2b}</em>
          </p>
          <p
            className="font-dm font-light leading-relaxed mb-12 max-w-2xl"
            style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: '#A0A0A0' }}
          >
            {t.body}
          </p>
          <p
            className="font-dm text-sm"
            style={{ color: '#3C3C3C' }}
          >
            {t.signature}
          </p>
        </div>
      </div>
    </section>
  )
}
