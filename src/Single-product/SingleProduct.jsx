import React from 'react'
import { UseProductData } from '../Hooks/UseProductData'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const SingleProduct = () => {
  const { id } = useParams()
  const { data, loading } = UseProductData(`products/${id}`)
  console.log(data);


  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <BeatLoader />
        </div>
      ) : (
        <section className="flex items-center flex-wrap justify-between gap-10 h-screen">
          {data && (
            <section className="grid grid-cols-2 gap-2 mx-auto">
              <div>
                <img src={data?.thumbnail} alt="" className=" rounded-md" />
              </div>
              <div className=" bg-purple-950 text-white text-center rounded-md flex flex-col justify-center">
                <h1 className=" text-2xl">Name: {data?.title}</h1>
                <h3>Price: ${data?.price}</h3>
                <p>Description: {data?.description}</p>
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  );
}

export default SingleProduct