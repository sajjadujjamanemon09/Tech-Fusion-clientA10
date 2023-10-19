/* eslint-disable react/prop-types */
import { Link, useLoaderData } from "react-router-dom";

const SingleProduct = () => {

    const {name, image, description, type, brand} =  useLoaderData()
    return (
        <div className='px-6 pb-14'>
        <h1 className="text-5xl font-bold py-10 ">{name}</h1>
       <div><img className="hero h-[60vh] w-[60vh] mx-auto " src={image} alt="" /></div>

   <div className="flex items-center gap-4 pt-9">
   <p className="text-lg font-semibold">Brand Name:</p>
   <p className=" font-bold text-2xl">{brand}</p>
    
   </div>

    <div className="flex items-center gap-4 pt-4">
        <p className="text-lg font-semibold">Type:</p>
    <p className=" font-bold text-2xl">{type}
    </p>
    </div>

    <p className="pb-10 pt-4 w-[50vh] text-lg font-semibold">Specification: <span className="text-base font-light">{description}</span></p>
    
    
    <Link to={'/myCart'}>
    <button className="w-full btn text-xl bg-slate-900 text-white">Add to Cart</button>
    </Link>
    </div>
    );
};

export default SingleProduct;