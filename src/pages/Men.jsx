import React from "react";
import ImageContainer from "../components/ImageContainer";
import ProductDetails from "../components/ProductDetails";

const Men = () => {
    return (
        <div className="mobile container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 max-w-6xl mx-auto">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <ImageContainer />
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-1/2 lg:pt-12">
                    <ProductDetails />
                </div>
            </div>
        </div>

    )
};

export default Men;
