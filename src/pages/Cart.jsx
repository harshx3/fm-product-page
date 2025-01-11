import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Cart = () => {

    const { parent } = useParams();
    const { cart } = useContext(AppContext);
    console.log(cart);

    return (
        <>
            {cart ? (
                <div className="flex m-4 gap-2">
                    <img src="/src/assets/image-product-1.jpg" alt="product" className="w-[7%] rounded-lg" />
                    <div className="flex  flex-col items-center justify-center gap-3">
                        <p>$125.00 × <span>{cart}</span> <strong>{(125 * cart).toFixed(2)}</strong></p>
                        <button className="flex px-4 py-2 bg-orange-500 text-white font-bold rounded-lg 
                    hover:bg-orange-600 transition-colors">
                            Checkout
                        </button>
                    </div>
                </div>
            ) : "Your cart is empty"}
        </>
    )
};

export default Cart;