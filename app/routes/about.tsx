import { Link } from '@remix-run/react';

export default function About() {
  return (
    <section className="px-5 py-2 font-sans">
      <h2>About page</h2>
      <Link to="/" className="text-blue">
        Back
      </Link>
    </section>
  );
}
