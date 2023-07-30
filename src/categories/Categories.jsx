import React from 'react'
import { UseProductData } from '../Hooks/UseProductData'
import { BeatLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';

const Categories = () => {
    const { categories } = useParams()
    const { data, loading } =  UseProductData(
        categories ? `products/category/${categories}` : 'products'
    )

    const navigate = useNavigate()
  
  return (
    <div>
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
                  <div className=" bg-purple-800 px-4 py-4 w-52 h-[25rem] rounded-md text-white font-bold">
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
    </div>
  );
}

export default Categories