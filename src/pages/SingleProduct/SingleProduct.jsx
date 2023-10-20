/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const SingleProduct = () => {

    const {_id,name, image, description, type, brand} =  useLoaderData()
    const addedItem = {name, image, description, type, brand, }
 
    const handleAddToCart = () => {
        fetch('https://assignment-10-server-392jrr3r1-sajjaduj-jaman-emons-projects.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal("Success!","Adding Product to Cart Successfully", "success")
            }
        })
    }

   
    return (
        <div className='px-6 pb-14'>
        <h1 className="text-5xl font-bold py-10 ">{name}</h1>
       <div><img className="hero md:h-[60vh] md:w-[60vh] mx-auto " src={image} alt="" /></div>

   <div className="flex items-center gap-4 pt-9">
   <p className="text-lg font-semibold">Brand Name:</p>
   <p className=" font-bold text-2xl">{brand}</p>
    
   </div>

    <div className="flex items-center gap-4 pt-4">
        <p className="text-lg font-semibold">Type:</p>
    <p className=" font-bold text-2xl">{type}
    </p>
    </div>

    <p className="pb-10 pt-4 md:w-[50vh] text-lg font-semibold">Specification: <span className="text-base font-light">{description}</span></p>
    
    
    
    <button onClick={() => handleAddToCart(_id)} className="w-full btn text-xl bg-slate-900 text-white">Add to Cart</button>
    
    </div>
    );
};

export default SingleProduct;