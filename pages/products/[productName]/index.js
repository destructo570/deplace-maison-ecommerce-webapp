import axios from "axios";
import ProductDetails from "../../../components/productDetails/ProductDetails";

function ProductDetailsPage(props) {
  return <ProductDetails data={props.productDetails} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productName: "the-eye" } },
      { params: { productName: "the-side" } },
      { params: { productName: "carnera" } },
      { params: { productName: "duran" } },
      { params: { productName: "cactus" } },
      { params: { productName: "rivolta" } },
      { params: { productName: "pantafaca" } },
      { params: { productName: "tunney" } },
      { params: { productName: "trescia" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const productName = params.productName;
  let productDetails = null;

  try {
    const response = await axios.get(
      `https://deplacemaisontest-default-rtdb.firebaseio.com/products/${productName}.json`
    );
    productDetails = response.data;
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      productDetails,
    },
  };
}

export default ProductDetailsPage;
