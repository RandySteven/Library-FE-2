"use client";
import { Fragment } from "react"
import { AboutUsSection } from "../Elements/AboutUsSection"
import { BookCard } from "../Elements/BookCard"
import {  useAboutUsContentHook, useBookPopularRating } from "@/hooks/homeBodyHook";

export const HomeBody = () => {
    return <>
        <Fragment>
            <AboutUs />
            <PopularBooks />
        </Fragment>
    </>
}


const AboutUs = () => {
    let aboutUsContent = useAboutUsContentHook()

    return <>
        <Fragment>
            <AboutUsSection 
                welcomeMessage={aboutUsContent.welcomeMessage}
                mission={aboutUsContent.mission}
                services={aboutUsContent.services}
                whyChooseUs={aboutUsContent.whyChooseUs}
                values={aboutUsContent.values}
                closingMessage={aboutUsContent.closingMessage}
                contactInfo={aboutUsContent.contactInfo}
            />
        </Fragment>
    </>
}

const PopularBooks = () => {
    let listBookResponse = useBookPopularRating()   

    return <>
        <Fragment>
            <div className="bg-green-100 flex flex-wrap justify-center gap-4 p-4">
                {
                    listBookResponse.map((content, key) => (
                        <BookCard 
                            id={content.id}
                            key={content.id}
                            title={content.title}
                            image={content.image}
                            status={content.status}
                            rating={content.rating}
                            />
                    ))
                }
            </div>
        </Fragment>
    </>
}