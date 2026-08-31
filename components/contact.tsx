export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">say hi</p>
        <h2>Message to Order</h2>
        <p>
          For now, these are placeholders until you decide which Instagram, Etsy shop, email, or order form you want
          customers to use.
        </p>
        <div className="contact-links">
          <a href="mailto:hello@mbcoastalcreations.com">
            Email <span>hello@mbcoastalcreations.com</span>
          </a>
          <a href="#contact">
            Instagram <span>@yourusername</span>
          </a>
          <a href="#contact">
            Etsy <span>your shop link</span>
          </a>
        </div>
        <p className="fine-print">
          We can replace every placeholder as soon as you send me the real account details.
        </p>
      </div>
    </section>
  )
}
