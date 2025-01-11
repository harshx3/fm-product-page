import React, { useState } from "react";

const ImageContainer = () => {
    const [imageToDisplay, setImageToDisplay] = useState(1);

    const handlePrevious = () => {
        setImageToDisplay(prev => prev === 1 ? 4 : prev - 1);
    };

    const handleNext = () => {
        setImageToDisplay(prev => prev === 4 ? 1 : prev + 1);
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Main Image Container */}
            <div className="relative w-[70%] max-[500px]:w-full">
                <img
                    src={`/assets/image-product-${imageToDisplay}.jpg`}
                    alt="product-image"
                    className="w-full rounded-2xl"
                />

                {/* Navigation Buttons - Visible only on mobile */}
                <button
                    onClick={handlePrevious}
                    className="hidden max-[500px]:flex absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="hidden max-[500px]:flex absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md"
                >
                    →
                </button>
            </div>

            {/* Thumbnails - Hidden on mobile */}
            <div className="thumbnail-img flex gap-4 max-[500px]:hidden">
                {[1, 2, 3, 4].map((img, index) => (
                    <img
                        key={index}
                        src={`/assets/image-product-${img}-thumbnail.jpg`}
                        alt={`thumbnail-${img}`}
                        className={`w-[15%] rounded-lg cursor-pointer transition-all
                            ${imageToDisplay === img
                                ? "border-2 border-orange-600 opacity-60"
                                : "hover:opacity-60"
                            }`}
                        onClick={() => setImageToDisplay(img)}
                    />
                ))}
            </div>
        </div>
    )
};

export default ImageContainer;