import Collections from "../components/collections/Collections";
import ScrollingDivider from "../components/scrollingDivider/ScrollingDivider";
import PromoInfo from "../components/promoInfo/PromoInfo";
import Testimonials from "../components/testimonials/Testimonials";
import PromoProducts from "../components/promoProducts/PromoProducts";
import axios from "axios";

export default function Home(props) {
  return (
    <main>
      <Collections />
      <ScrollingDivider />
      <PromoInfo />
      <PromoProducts products={props.promoProducts} />
      <Testimonials />
    </main>
  );
}

export async function getStaticProps() {
  let promoProducts = null;
  let error = null;

  //Fetch promo products list from the firebase database
  try {
    const response = await axios.get(
      "https://deplacemaisontest-default-rtdb.firebaseio.com/promo-products.json"
    );
    promoProducts = response.data;
  } catch (error) {
    error = error.message;
    console.log(error.message);
  }

  return {
    props: {
      promoProducts: {
        data: promoProducts,
        error,
      },
    },
  };
}
