/* eslint-disable react/prop-types */

import swal from "sweetalert";


const AddedCart = ({cart, carts, setCarts}) => {
    const {_id, image, name, type, brand} = cart;


    const handleRemove = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Cart!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://assignment-10-server-five-rho.vercel.app/carts/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        swal("Success! Your Selected cart has deleted!", {
                            icon: "success",
                          });
                          const remaining = carts.filter(car => car._id !== id)
                          setCarts(remaining)
                    }
                })
            }
          });
    }

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
      onClick={() => handleRemove(_id)}
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
