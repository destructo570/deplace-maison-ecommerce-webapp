import Products from "../../components/products/Products";
import axios from "axios";

export default function ProductsPage(props) {
  return <Products productsList={props.productsList.data} />;
}

export async function getStaticProps() {
  let productsList = null;

  try {
    const response = await axios.get(
      "https://deplacemaisontest-default-rtdb.firebaseio.com/products.json"
    );
    productsList = response.data;
  } catch (error) {
    console.log(error.message);
  }

  if (productsList === null) {
    return { notFound: true };
  }
  return {
    props: {
      productsList: {
        data: productsList,
      },
    },
  };
}
