import Collections from "../components/collections/Collections";
import ScrollingDivider from "../components/scrollingDivider/ScrollingDivider";
import returns from "../components/returns/Returns";
import axios from "axios";


export default function Home(props) {
  return (
    <main>
        <Returns />
      <Collections />
      <ScrollingDivider />
    
     
      
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
    console.log("ERROR: ", error.message);
  }

  if (promoProducts === null) {
    return { notFound: true };
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
