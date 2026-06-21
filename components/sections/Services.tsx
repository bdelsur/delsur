import Image from 'next/image'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Services({ lang }: Props) {
  const t = T[lang].services

  return (
    <section id="servicios" className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Background photo (light mode only) */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <Image
          src="/images/delsur1.webp"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'left top', opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(270deg, var(--bg) 0%, var(--bg) 45%, rgba(250,248,244,0.6) 70%, transparent 100%)' }}
        />
      </div>

      {/* Background photo (dark mode only) */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <Image
          src="/images/delsur2.webp"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'left top', opacity: 0.18 }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--bg)', opacity: 0.75 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-oswald font-bold uppercase" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}>
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--border)' }}>
          {t.items.map((item, i) => (
            <div
              key={item.num}
              className="group relative p-8 md:p-10 transition-colors"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              {/* Red top bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: '#FF3319' }}
              />

              {/* Number */}
              <span
                className="block font-oswald font-bold mb-6 select-none"
                style={{ fontSize: 'clamp(56px, 8vw, 100px)', color: 'var(--border)', lineHeight: 1 }}
              >
                {item.num}
              </span>

              <h3
                className="font-oswald font-light leading-none mb-4"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: 'var(--ink)' }}
              >
                {item.titleA}{' '}
                <span style={{ color: '#FF3319' }}>{item.titleB}</span>
              </h3>

              <p
                className="font-dm font-light leading-relaxed mb-6"
                style={{ fontSize: '15px', color: 'var(--mid)' }}
              >
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-dm text-xs px-2.5 py-1 border"
                    style={{ color: 'var(--soft)', borderColor: 'var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
