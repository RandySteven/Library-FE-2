'use client';
import { useTitleContentHook } from "@/hooks/titleContentHook"
import { Fragment } from "react"

export const HeroSection = () => {
    let title = useTitleContentHook()
    return <>
            <Fragment>
                <div 
                    className={`
                        h-96 bg-cover bg-center 
                        flex items-center 
                        justify-center`
                    }
                    style={{
                        backgroundImage: 
                            `url('/images/hero_section.jpg')`
                    }}>
                    <h1 className="text-white text-4xl font-bold align-middle">
                        <span className="drop-shadow-xl [text-shadow:_0_3px_3px_rgb(0_0_0_/_50%)]">
                            {title}
                        </span>
                    </h1>
                </div>    
            </Fragment>
    </>
}