
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import Layout from "../Layout/Layout";


const Home = () => {

    const [store, setStore]   = useState([])


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(result=> setStore(result))
    }, [])

console.log(store);
   
  return (
    <>
      <Layout>
        <div className="flex flex-wrap gap-4 justify-center">
          {store?.products?.map((pd) => (
            <Card key={pd.id} info={pd} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Home