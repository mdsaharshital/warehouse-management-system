import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateStock = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    (async () => {
      const { data } = await axios.get(url);
      setProduct(data.data);
    })();
  }, []);
  const { name, price, quantity, supplier, description, img } = product;

  const handledeliver = () => {
    const url = `http://localhost:5000/products?id=${id}&quantity=${
      quantity - 1
    }`;
    const { data } = axios.put(url, {
      quantity: quantity - 1,
    });
    console.log(data);
  };
  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Update Stock of : {name}</h1>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={img}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: ${price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Quantity {quantity}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Supplier: {supplier}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <button className="btn hero-btn">Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;