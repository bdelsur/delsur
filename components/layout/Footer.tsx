import Image from 'next/image'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Footer({ lang }: Props) {
  const t = T[lang].footer

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020202', color: '#EDEDED' }}>
      {/* Background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/fotodelsur1.webp"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'right center', opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #020202 0%, #020202 45%, rgba(2,2,2,0.5) 75%, rgba(2,2,2,0.75) 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo col */}
          <div>
            <p className="font-oswald font-bold text-6xl leading-none mb-4" style={{ color: '#EDEDED' }}>
              DEL<br />
              SUR<span style={{ color: '#FF3319' }}>.</span>
            </p>
            <p className="font-dm text-sm" style={{ color: '#A0A0A0' }}>{t.tagline}</p>
          </div>

          {/* Services col */}
          <div>
            <p className="font-dm text-xs uppercase tracking-widest mb-4" style={{ color: '#3C3C3C' }}>
              {lang === 'es' ? 'Servicios' : 'Services'}
            </p>
            <ul className="space-y-2">
              {t.services.map(s => (
                <li key={s}>
                  <a href="#servicios" className="font-dm text-sm hover:opacity-100 transition-opacity" style={{ color: '#A0A0A0' }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <p className="font-dm text-xs uppercase tracking-widest mb-4" style={{ color: '#3C3C3C' }}>
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </p>
            <ul className="space-y-2">
              {t.contact.map(c => (
                <li key={c}>
                  {c.includes('@') ? (
                    <a href={`mailto:${c}`} className="font-dm text-sm" style={{ color: '#A0A0A0' }}>{c}</a>
                  ) : (
                    <span className="font-dm text-sm" style={{ color: '#A0A0A0' }}>{c}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-8"
          style={{ borderTop: '1px solid #1E1E1E' }}
        >
          <p className="font-dm text-xs" style={{ color: '#3C3C3C' }}>{t.copyright}</p>
          <p className="font-dm text-xs" style={{ color: '#3C3C3C' }}>{t.made}</p>
        </div>
      </div>
    </footer>
  )
}
