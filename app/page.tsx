import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { IntroStrip } from "@/components/intro-strip"
import { Collections } from "@/components/collections"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { CustomOrders } from "@/components/custom-orders"
import { HowItWorks } from "@/components/how-it-works"
import { Events } from "@/components/events"
import { EtsyBand } from "@/components/etsy-band"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <IntroStrip />
      <Collections />
      <FeaturedProducts />
      <About />
      <CustomOrders />
      <HowItWorks />
      <Events />
      <EtsyBand />
      <Contact />
      <SiteFooter />
    </main>
  )
}
