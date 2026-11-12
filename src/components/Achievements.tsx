
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg
      viewBox="0 0 30 64"
      className={`h-14 w-auto text-[#d9b46a] ${
        side === 'r' ? '-scale-x-100' : ''
      }`}
      aria-hidden
    >
      <path
        d="M26 62C10 52 4 36 8 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse
          key={y}
          cx={i < 2 ? 9 : 8 + i * 1.6}
          cy={y}
          rx="5"
          ry="2.2"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(-40 ${8 + i * 1.6} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);

  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  // Close preview using Escape and prevent background scrolling.
  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertificate]);

  const issuers = Array.from(
    new Set(certifications.map((c) => c.issuer))
  );

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{
              duration: 0.9,
              delay: i * 0.08,
              ease: EASE,
            }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent"
                />

                <div
                  aria-hidden
                  className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25"
                />

                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">
                      {a.laurel}
                    </p>
                  </div>
                  <Laurel side="r" />
                </div>

                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">
                  {a.title}
                </h3>

                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">
                  {a.org}
                </p>

                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">
                  {a.detail}
                </p>

                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Certifications section */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            Certified{' '}
            <span className="text-mist">
              · {certifications.length} credentials
            </span>
          </h3>

          <p className="text-xs text-smoke">
            {issuers.join(' · ')}
          </p>
        </div>

        <div className="group/rail relative">
          <div
            ref={rail}
            className="rail gutter flex snap-x gap-4 overflow-x-auto py-5"
          >
            {certifications.map((c, i) => (
              <motion.button
                key={c.name}
                type="button"
                onClick={() => {
                  console.log('Certificate clicked:', c.name);
                  setSelectedCertificate(c);
                }}
                data-cursor="link"
                aria-label={`View ${c.name} certificate`}
                className="group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-ink-2 text-left ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-crimson-2/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(i, 6) * 0.04,
                  ease: EASE,
                }}
              >
                {/* Certificate thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={c.image}
                    alt={`${c.name} certificate`}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                  <span className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    Click to view ↗
                  </span>
                </div>

                {/* Certificate information */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-crimson-2">
                      {c.issuer}
                    </span>

                    <span className="text-sm text-smoke transition group-hover:text-bone">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-semibold leading-snug text-bone">
                    {c.name}
                  </p>

                  <p className="mt-3 text-[10px] uppercase tracking-wider text-smoke">
                    View certificate
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <RailButtons rail={rail} />
        </div>
      </div>

      {/* FULL-SCREEN CERTIFICATE VIEWER */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] h-[100dvh] w-screen overflow-hidden bg-black"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="relative flex h-full w-full flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.name}
          >
            {/* Top navigation */}
            <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between gap-4 bg-gradient-to-b from-black via-black/80 to-transparent px-4 py-5 sm:px-8">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-white sm:text-lg">
                  {selectedCertificate.name}
                </h3>

                <p className="mt-1 text-xs text-gray-300">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/30"
              >
                ×
              </button>
            </div>

            {/* Full-size image */}
            <div className="flex h-full w-full items-center justify-center p-2 pt-16 sm:p-6 sm:pt-20">
              <img
                key={selectedCertificate.image}
                src={selectedCertificate.image}
                alt={`${selectedCertificate.name} full certificate`}
                className="block h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
