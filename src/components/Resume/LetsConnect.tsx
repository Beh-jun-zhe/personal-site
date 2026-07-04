import Link from 'next/link';

export default function LetsConnect() {
  return (
    <div className="connect">
      <div className="link-to" id="connect" />
      <p className="text-sm text-[var(--color-fg-light)] text-center">
        Challenge me with your crazy idea.{' '}
        <Link
          href="/contact"
          className="font-medium text-[var(--color-accent)] hover:text-[var(--color-fg-bold)] transition-colors duration-150"
        >
          Get in touch →
        </Link>
      </p>
    </div>
  );
}
