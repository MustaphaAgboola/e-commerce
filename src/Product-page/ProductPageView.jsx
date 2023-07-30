import React, { useLayoutEffect } from "react";
import { UseProductData } from "../Hooks/UseProductData";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductPage = (props) => {
  const { loading, data } = UseProductData('products');
  const navigate = useNavigate()

  useLayoutEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <BeatLoader />
        </div>
      ) : (
        <section className=" flex justify-center flex-wrap mx-2 my-5 gap-4">
          {data &&
            data.products.map((item, index) => {
              return (
                <div key={index} className=" bg-slate-50">
                  <div className=" bg-purple-800 px-4 py-4 w-56 h-[25rem] rounded-md text-white font-bold">
                    <img src={item.thumbnail} alt="" className=" w-60 h-60" />
                    <div>
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                    <button
                      onClick={() => navigate("/product/" + item.id)}
                      className="bg-purple-400 px-4 py-2 mx-16 my-4 rounded-md hover:scale-95"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    </motion.div>
  );
};

export default ProductPage;
