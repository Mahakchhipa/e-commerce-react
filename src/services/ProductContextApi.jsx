// import React, { createContext, useEffect, useState } from "react";
// // import ProductProvider from "./services/ProductContextApi";
// // ✅ createContext को CALL किया गया है
// const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function getP() {
//       try {
//         const response = await fetch(
//           "https://gist.githubusercontent.com/Mahakchhipa/0a9700fb0ca5dea48f959969e0294b9c/raw/e71e431c836bc5353a720b24c46d425cc80b032c/productdata.json"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setProduct(data);
//           console.log(data);
//         } else {
//           throw new Error("Failed to fetch data")
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     getP();
//   }, []);

//   return (
//     <ProductContext.Provider value={product}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export { ProductProvider, ProductContext }; // Export both for use

// import React, { Children, useContext, useEffect, useState } from "react";
// import { createContext } from "react";

// export const ProductProvider = () => {
//   const [product, setproduct] = useState([]);
//   const ProductContext = createContext();
//   useEffect(() => {
//     async function getP() {
//       try {
//         const response = await fetch(
//           "https://gist.githubusercontent.com/Mahakchhipa/0a9700fb0ca5dea48f959969e0294b9c/raw/e71e431c836bc5353a720b24c46d425cc80b032c/productdata.json"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setproduct(data);
//           console.log(data);
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     getP();
//   }, []);
//   return (
//     <ProductContext.Provider value={{ product }}>
//       {Children}
//     </ProductContext.Provider>
//   );
// };

// export const useProduct = () => useContext(ProductContext);
// export default <ProductProvider></ProductProvider>

import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create the context
const ProductContext = createContext();

// 2. Create the provider component
export const ProductProvider = ({ children }) => {
  console.log(children, "children");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://gist.githubusercontent.com/Mahakchhipa/0a9700fb0ca5dea48f959969e0294b9c/raw/e71e431c836bc5353a720b24c46d425cc80b032c/productdata.json";
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// 3. Custom hook to use context
export const useProduct = () => useContext(ProductContext);
