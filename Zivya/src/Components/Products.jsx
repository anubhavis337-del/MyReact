import React, { useEffect, useState } from "react";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  return (
    <div className="bg-[#E8F0E6] min-h-screen p-8">

      <h1 className="text-4xl font-bold text-[#B76E85] text-center">
        Discover Our Collection
      </h1>

      {loading ? (
        <p className="text-center mt-10">Loading products...</p>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

          {products.map((item) => (

            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-md">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl"
              />

              <h2 className="font-semibold text-black mt-4">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2">
                ₹{item.price}
              </p>

              <button className="bg-[#713B50] text-white w-full py-2 rounded-full mt-4 hover:bg-[#F8B8C7]">
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Products;