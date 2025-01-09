import React, { useState } from "react";

const ImageContainer = () => {

    const [imageToDisplay, setImageToDisplay] = useState(1);

    return (
        <>
            <div>

                <div>
                    <img src={`src/assets/image-product-${imageToDisplay}.jpg`} alt="product-image" className="w-[50%] rounded-2xl" />
                </div>

                <div className="flex gap-4 mt-2 ml-2">
                    {
                        [1, 2, 3, 4].map((img, index) => (
                            <img
                                key={index}
                                src={`src/assets/image-product-${img}-thumbnail.jpg`}
                                alt={`thumbnail-${img}`}
                                className={`w-[10%] h-[10%] rounded-lg cursor-pointer ${imageToDisplay === img ? "border-2 border-orange-600 opacity-40" : "hover:opacity-40"}`}
                                onClick={() => setImageToDisplay(img)} />
                        ))
                    }
                </div>

            </div>
        </>
    )
};
export default ImageContainer;