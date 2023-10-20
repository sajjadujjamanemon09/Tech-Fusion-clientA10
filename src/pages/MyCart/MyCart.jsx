
import AddedCart from "./AddedCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyCart = () => {


    const [carts, setCarts] = useState([])


    const {user, loading} = useContext(AuthContext)

    const userEmail = user.email;

    useEffect(() => {
        if (!loading) {
            fetch(`https://ass10-two.vercel.app/carts/${userEmail}`)
                .then(res => res.json())
                .then(data => setCarts(data))
        }
    }, [user])

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center py-10 text-cyan-700">Cart Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
                carts?.map(cart => <AddedCart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></AddedCart>)
            }
            </div>
        </div>
    );
};

export default MyCart;