import { useTranslation } from '@/hooks/useTranslation';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import LogoHorizontal from '../assets/logo-horizontal.png';

const socialLinks = [
  { href: 'https://facebook.com/interactivenetpl', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com/interactivenetpl', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/in/jakub-stawski-dev', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/pstawekl', icon: Github, label: 'GitHub' },
  { href: 'tel:+48518275470', icon: Phone, label: 'Telefon' },
  { href: 'mailto:jakub.stawski@interactive.net.pl', icon: Mail, label: 'Email' },
]

export default function Footer() {
  const { t, ts, currentLanguage } = useTranslation()
  const isPolish = currentLanguage === 'pl'

  const footerCopy = isPolish
    ? 'Projektujemy i wdrażamy strony, sklepy oraz platformy webowe dla firm, które potrzebują technologii pracującej na wynik.'
    : 'We design and build websites, stores, and web platforms for teams that need technology to support measurable growth.'

  const servicesHeading = isPolish ? 'Specjalizacje' : 'Services'
  const contactHeading = isPolish ? 'Kontakt' : 'Contact'
  const localLabel = isPolish ? 'Strony WWW Zduńska Wola' : 'Websites in Zdunska Wola'
  const footerMotto = isPolish ? 'Kod / Sprzedaż / Rozwój' : 'Code / Commerce / Growth'

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#09090b] text-zinc-300">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_52%_96%,rgba(236,72,153,0.12),transparent_34%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.9) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="interactive-container relative z-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-auto w-[220px] drop-shadow-[0_0_34px_rgba(139,92,246,0.22)]"
              width={225}
              height={67}
              src={LogoHorizontal}
              alt="Interactive logo horizontal"
              loading="lazy"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">{footerCopy}</p>
            <div className="mt-6 flex flex-row flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={`${social.label} - Interactive`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-purple-400/50 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <FooterColumn
            title={ts('menu')}
            links={[
              { to: '/', label: t('indexViewMap1').toString() },
              { to: '/www', label: t('www').toString() },
              { to: '/ecommerce', label: t('onlineStore').toString() },
              { to: '/contact', label: t('contact').toString() },
            ]}
          />

          <FooterColumn
            title={servicesHeading}
            links={[
              { to: '/www', label: t('www').toString() },
              { to: '/ecommerce', label: t('onlineStore').toString() },
              { to: '/courses', label: t('courses').toString() },
              { to: '/strony-internetowe-zdunska-wola', label: localLabel },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h2 className="font-display text-lg font-semibold text-white">{contactHeading}</h2>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href="tel:+48518275470"
                className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-cyan-300" />
                +48 518 275 470
              </a>
              <a
                href="mailto:jakub.stawski@interactive.net.pl"
                className="flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-fuchsia-300" />
                jakub.stawski@interactive.net.pl
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Interactive. {ts('allRightsReserved')}</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
            <span className="interactive-gradient-text">{footerMotto}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ to: string; label: string }>
}) {
  return (
    <motion.nav
      className="space-y-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label={title}
    >
      <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to as any}
            className="group relative w-fit text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 rounded-full [background:var(--gradient-brand)] transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
