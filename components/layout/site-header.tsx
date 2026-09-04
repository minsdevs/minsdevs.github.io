export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="#top" aria-label="Minseok Chae, home">
        MC
        <span className="signal-dot" aria-hidden="true" />
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#method">Method</a>
        <a href="#profile">Profile</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
