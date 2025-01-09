import React from "react";

const ProductDetails = () => {
    return (

        <>

            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-2">


                    <p className="font-simbold uppercase text-gray-600 w-fit">Sneaker Company</p>

                    <h1 className="w-80 text-4xl">Fall Limited Edition Sneakers</h1>

                    <p className="text-justify w-[60%] text-gray-600">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>

                </div>

                <div className="flex flex-col">
                    <h3 className="font-bold text-xl">$125.00  <span className="bg-black text-white px-1 py-[3px] rounded-md ml-2 text-xs">50%</span></h3>
                    <del className="text-gray-600">$250.00</del>
                </div>

                <div className="flex gap-3">
                    <div className="bg-gray-300 flex gap-5 rounded-lg px-4 py-1">
                        <button >-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>

                    <button className="bg-orange-400 px-8 py-1 rounded-lg">Add to cart</button>
                </div>

            </div>

        </>
    )
};

export default ProductDetails;