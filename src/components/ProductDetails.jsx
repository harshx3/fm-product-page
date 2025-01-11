import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductDetails = () => {

    const { count, increment, decrement, addToCart } = useContext(AppContext);

    return (

        <div className="flex flex-col gap-8">
            {/* Product Info */}
            <div className="flex flex-col gap-6">
                <p className="font-bold uppercase text-orange-600 tracking-wide text-sm">
                    Sneaker Company
                </p>
                <h1 className="text-5xl font-bold">
                    Fall Limited Edition Sneakers
                </h1>
                <p className="text-gray-500 leading-relaxed">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer
                </p>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <h3 className="text-3xl font-bold">$125.00</h3>
                    <span className="ml-4 bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold text-sm">
                        50%
                    </span>
                </div>
                <del className="text-gray-400 font-medium">$250.00</del>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 sm:w-36">
                    <button onClick={(count) => decrement(count)} className="text-orange-600 font-bold text-xl hover:opacity-75">
                        -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button onClick={(count) => increment(count)} className="text-orange-600 font-bold text-xl hover:opacity-75">
                        +
                    </button>
                </div>
                <button onClick={() => addToCart(count)} className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-lg 
                hover:bg-orange-600 transition-colors flex items-center justify-center gap-4">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="currentColor" fillRule="nonzero" />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    )
};

export default ProductDetails;