import { Fragment } from "react"

export const HeroSection = () => {
    return <>
        <Fragment>
            <div 
                className={`
                    h-96 bg-cover bg-center 
                    bg-[url(/images/hero_section.jpg)] 
                    flex items-center 
                    justify-center`
                }>
                <h1 className="text-black font-bold text-4xl align-middle">Welcome to Next.js</h1>
            </div>    
        </Fragment>
    </>
}