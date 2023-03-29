import React, { useEffect, useState } from "react";

import Axios from "./API";
import ProductModal from "./components/Modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rating: { rate: 0 },
  });

  const fetchData = async () => {
    const { data } = await Axios.get("/products");
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([productDetails, ...data]);
    setOpen(false);
  };
  return (
    <div className="App">
      <Navbar />
      <Products setOpen={setOpen} data={data} />
      <ProductModal
        open={open}
        setOpen={setOpen}
        setProductDetails={setProductDetails}
        productDetails={productDetails}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
