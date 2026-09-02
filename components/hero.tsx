export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="watercolor watercolor-one" />
      <div className="watercolor watercolor-two" />
      <div className="hero-copy">
        <p className="eyebrow">handmade • coastal • one of a kind</p>
        <h1>
          Handmade with a little bit of<span> creativity &amp; the coast.</span>
        </h1>
        <p className="hero-text">
          A collection of jewelry, candles, soaps, ornaments, seasonal pieces, and whatever I feel inspired to make
          next.
        </p>
        <div className="hero-actions">
          <a className="button" href="#shop">
            Shop My Creations
          </a>
          <a className="button button-ghost" href="#contact">
            Message to Order
          </a>
        </div>
        <div className="tiny-note">made in small batches ♡ custom requests welcome</div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="paper-card card-back">
          <span>handmade</span>
        </div>
        <div className="paper-card card-front">
          <div className="mini-sun" />
          <div className="mini-wave wave-a" />
          <div className="mini-wave wave-b" />
          <p>made by hand</p>
          <strong>All requests can be accommodated! </strong>
        </div>
        <div className="tape" />
        <div className="scribble">♡</div>
      </div>
    </section>
  )
}
