import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Jun Zhe Beh</span>
        </h1>

        <p className="hero-tagline">
          Supplier Quality Engineering Intern{'Corning Inc.'}
          <a href="https://www.corning.com" className="hero-highlight">
            Corning Inc.
          </a>
        </p>

        <div className="hero-chips">
          <span className="hero-chip">UB ISE</span>
          <span className="hero-chip">HPAIR Delegate</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
