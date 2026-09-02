export function SiteHeader() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top">
        <span className="brand-mark">MB</span>
        <span>
          <strong>Coastal Creations</strong>
          <small>handmade by Melli</small>
        </span>
      </a>
      <nav>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#custom">Custom</a>
        <a href="#events">Craft Fairs</a>
      </nav>
      <a className="button button-small" href="#contact">
        Message to Order
      </a>
    </header>
  )
}
