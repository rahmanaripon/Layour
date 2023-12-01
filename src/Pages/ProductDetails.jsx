import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout";


const ProductDetails = () => {

  const { id } = useParams()
  console.log("In the Product Details: ", id);

  const [prod, setProd] = useState({})


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setProd(result))
  }, [id])

  const { images } = prod;

  console.log("Product Details: ", Array.isArray(images));

  return (
    <Layout title={"productDeetails"}>
      <img src={prod.thumbnail} alt="" />

      <h1>{prod.title}</h1>

    </Layout>
  )
}

export default ProductDetails