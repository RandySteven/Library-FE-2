'use client';
import { CarouselsProp } from "@/interfaces/props/CarouselProp"
import { MarketingBannerProp } from "@/interfaces/props/MarketingBannerProp"
import React, { Fragment, useEffect, useState } from "react"

export const MarketingBannerCarousel: React.FC<CarouselsProp> = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = React.Children.count(children);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentIndex, totalSlides]);

    return <>
        <Fragment>
            <div id="default-carousel" className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {React.Children.map(children, (child, index) => (
                        <div
                            className={`absolute w-full h-full transition-opacity duration-700 ${
                                index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {child}
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={goToPrevSlide}
                >
                    {/* Your previous button SVG */}
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={goToNextSlide}
                >
                    {/* Your next button SVG */}
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </Fragment>
    </>
}

export const MarketingBannerContentImage = (props: MarketingBannerProp) => {
    return <>
        <Fragment>
            <img src={props.imagePath} 
                className="block w-full h-full object-cover"
                alt="..." />
        </Fragment>
    </>
}