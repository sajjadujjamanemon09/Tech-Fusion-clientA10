/* eslint-disable react/prop-types */


const AddedCart = ({cart, handleDelete}) => {
    const {_id, image, name, type, brand} = cart;

    return (
        
<div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-60"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {name}
      </p>
      <p className="text-xs font-semibold text-cyan-700">
        {brand}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {type}.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      onClick={() => handleDelete(_id)}
      className="block w-full bg-slate-900 text-white select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Remove Form Cart
    </button>
  </div>
</div>
    );
};

export default AddedCart;