const chips = ["team colors", "birthdays", "party favors", "holidays", "personalized gifts", "just because"]

export function CustomOrders() {
  return (
    <section className="custom section" id="custom">
      <div className="custom-inner">
        <p className="eyebrow">made just for you</p>
        <h2>Have something specific in mind?</h2>
        <p>
          Send me your colors, inspiration, theme, quantity, name or initials, occasion, and when you need it. If I can
          make it happen, we&apos;ll create something together.
        </p>
        <div className="chips">
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <a className="button" href="#contact">
          Message About a Custom Order
        </a>
      </div>
    </section>
  )
}
