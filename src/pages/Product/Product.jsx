/* eslint-disable react/prop-types */


const Product = ({product}) => {
    const { name, brand, type, price, image, } = product;
    return (
        <div className="p-3">
        
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
        {name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {price}
      </p>
    </div>
    <p className="block font-semibold text-sm antialiased pb-3">{brand}</p>
    <p className="block font-semibold text-xs antialiased pb-3">{type}</p>
    <p className="block font-semibold text-xs antialiased pb-3"> <div className="rating rating-md gap-4">
                          <input type="radio" name="rating" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating" className="mask mask-star-2 bg-red-500" />
                          <input type="radio" name="rating" className="mask mask-star-2 bg-red-500" />
                        </div></p>
  </div>
  <div className="flex justify-between p-6 pt-0">
    <button
      className="block w-40 select-none rounded-lg bg-slate-900 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
    <button
      className="block w-40 select-none rounded-lg bg-slate-900 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Update Now
    </button>
  </div>
</div>
        
     </div>
    );
};

export default Product;