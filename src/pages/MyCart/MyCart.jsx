import { useLoaderData } from "react-router-dom";
import AddedCart from "./AddedCart";
import { useState } from "react";


const MyCart = () => {

    const addedCartItem = useLoaderData()

    const [carts, setCarts] = useState(addedCartItem)

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center py-10 text-cyan-700">Cart Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                carts.map(cart => <AddedCart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></AddedCart>)
            }
            </div>
        </div>
    );
};

export default MyCart;