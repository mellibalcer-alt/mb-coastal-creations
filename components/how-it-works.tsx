const steps = [
  { n: "01", title: "Find something you love", copy: "Browse the latest pieces and collections." },
  { n: "02", title: "Message to order", copy: "Send the item name or a screenshot of what you want." },
  { n: "03", title: "Personalize it", copy: "We'll talk colors, sizing, names, themes, or other details." },
  { n: "04", title: "Confirm the details", copy: "Price, timing, pickup or shipping get confirmed before I start." },
]

export function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="section-heading centered">
        <p className="eyebrow">easy ordering</p>
        <h2>See it. Love it. Message me.</h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.n}>
            <b>{s.n}</b>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
