import Link from 'next/link';

export default function Projects() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
      <h1>🧑‍💻 My portfolio is still in beta — features coming soon!</h1>
      <p>
        🚧 This portfolio is still under construction — watch your step!<br />
        In the meantime, you can check out my projects below 👇
      </p>
      <p>
        <Link
          href="https://joecsleiman.wixsite.com/joesleiman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0366d6', textDecoration: 'underline' }}
        >
          Open my external portfolio
        </Link>
      </p>
    </main>
  );
}