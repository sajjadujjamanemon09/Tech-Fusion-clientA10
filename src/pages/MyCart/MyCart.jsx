import { useLoaderData } from "react-router-dom";
import AddedCart from "./AddedCart";


const MyCart = () => {

    const addedCartItem = useLoaderData()

    const handleRemove = (id) => {
        console.log(id);
    }

    return (
        <div>
            <h2>This is my cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                addedCartItem.map(cart => <AddedCart key={cart._id} cart={cart} handleRemove={handleRemove}></AddedCart>)
            }
            </div>
        </div>
    );
};

export default MyCart;