import { ArrowUp } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>© {new Date().getFullYear()} Minseok Chae</p>
      <p>
        Built with evidence, iteration, and a healthy respect for edge cases.
      </p>
      <a href="#top" aria-label="Back to top">
        Back to top <ArrowUp size={15} aria-hidden="true" />
      </a>
    </footer>
  );
}
