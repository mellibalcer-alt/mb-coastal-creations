const products = [
  { tone: "sea", title: "Sea Glass Bracelet", note: "Custom colors available", image: "" },
  { tone: "sand", title: "Coastal Candle", note: "Seasonal scent + vessel", image: "" },
  { tone: "shell", title: "Handmade Ornament", note: "Personalization available", image: "" },
  { tone: "foam", title: "Giftable Soap Set", note: "Small-batch collection", image: "" },
]

export function FeaturedProducts() {
  return (
    <section className="section feature-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">recently made</p>
          <h2>Featured creations</h2>
        </div>
        <p>
          These are starter placeholders for now — we&apos;ll swap in your real photos, names, prices, and Etsy links.
        </p>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <article className="product-card" key={p.title}>
            <div className={`product-image ${p.tone}`}>
              {p.image ? (
                <img src={p.image || "/placeholder.svg"} alt={p.title} />
              ) : (
                <span>your product photo</span>
              )}
            </div>
            <div className="product-copy">
              <div>
                <h3>{p.title}</h3>
                <p>{p.note}</p>
              </div>
              <strong>$—</strong>
            </div>
            <a className="text-link" href="#contact">
              Message to Order →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
