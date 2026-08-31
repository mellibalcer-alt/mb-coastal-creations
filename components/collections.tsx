const collections = [
  {
    mark: "✦",
    kicker: "Colorful, personal & handmade",
    title: "Jewelry & Beads",
    copy: "Bracelets, necklaces, custom colors, and tiny pieces of summer you can wear.",
  },
  {
    mark: "◌",
    kicker: "Warm, cozy & giftable",
    title: "Candles",
    copy: "Small-batch candles and seasonal designs made to bring a little glow to your space.",
  },
  {
    mark: "❋",
    kicker: "Pretty everyday treats",
    title: "Soaps & Self-Care",
    copy: "Handmade soaps and sweet little self-care pieces for gifts, baskets, and guest spaces.",
  },
  {
    mark: "✧",
    kicker: "Made for special moments",
    title: "Ornaments & Seasonal",
    copy: "Holiday ornaments, seasonal décor, and keepsakes that change throughout the year.",
  },
  {
    mark: "≈",
    kicker: "Inspired by the water",
    title: "Coastal Creations",
    copy: "Beachy, nautical, and boat-day inspired creations for people who always want to be near the coast.",
  },
  {
    mark: "♡",
    kicker: "Your idea, handmade",
    title: "Custom Orders",
    copy: "Colors, names, themes, gifts, teams, parties, and one-of-a-kind requests are always welcome.",
  },
]

export function Collections() {
  return (
    <section className="section" id="shop">
      <div className="section-heading centered">
        <p className="eyebrow">browse by collection</p>
        <h2>A little bit of everything I love to make.</h2>
        <p>No two drops have to look the same — that&apos;s part of the fun.</p>
      </div>
      <div className="collection-grid">
        {collections.map((c) => (
          <article className="collection-card" key={c.title}>
            <div className="collection-mark">{c.mark}</div>
            <p className="card-kicker">{c.kicker}</p>
            <h3>{c.title}</h3>
            <p>{c.copy}</p>
            <a href="#contact">
              Message to Order <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
