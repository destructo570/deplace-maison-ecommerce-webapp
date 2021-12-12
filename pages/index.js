import Collections from "../components/collections/Collections";
import ScrollingDivider from "../components/scrollingDivider/ScrollingDivider";
import PromoInfo from "../components/promoInfo/PromoInfo";
import Testimonials from "../components/testimonials/Testimonials";
import PromoProducts from "../components/promoProducts/PromoProducts";

export default function Home() {
  return (
    <main>
      <Collections />
      <ScrollingDivider />
      <PromoInfo />
      <PromoProducts />
      <Testimonials />
    </main>
  );
}
