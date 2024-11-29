"use client";
import { useLocalization } from "@/hooks/localizationHook"
import { AboutUsProps } from "@/interfaces/props/HomeProps"
import { Fragment, useEffect, useState } from "react"

const WelcomeMessage = (props: {
    welcomeMessage: string
}) => {
    let localization = useLocalization()
    const [title, setTitle] = useState<string>(`About Us`)

    useEffect(()=> {
        if (localization == `jp`) {
            setTitle(`私達の事`)
        }
    })
    return <>
        <Fragment>
            <div className="my-4">
                <h1 className="text-4xl text-center font-bold">{title}</h1>
                <p className="px-8 py-2">
                    {props.welcomeMessage}
                </p>
            </div>
        </Fragment>
    </>
}

const MissionContent = (props: {
    mission: string
}) => {
    let localization = useLocalization()
    const [title, setTitle] = useState<string>(`Mission`)

    useEffect(()=> {
        if (localization == `jp`) {
            setTitle(`ミッション`)
        }
    
    })
    return <>
        <Fragment>
            <div className="my-4">
                <h1 className="text-4xl text-center font-bold">{title}</h1>
                <p className="px-8 py-2 text-center font-bold">
                    {props.mission}
                </p>
            </div>
        </Fragment>
    </>
}

interface Service {
    name: string
    description: string
}

const ServicesContent = (props: {
    services: Service[]
}) => {
    let localization = useLocalization()
    const [title, setTitle] = useState<string>(`Service`)

    useEffect(()=> {
        if (localization == `jp`) {
            setTitle(`サービス`)
        }
    
    })
    return <>
        <Fragment>
                <div className="my-4">
                    <h1 className="text-4xl text-center font-bold">{title}</h1>
                    <div className="flex flex-wrap justify-center gap-4 p-4">
                        {props.services.map((service, key) => (
                            <div className="w-[30%] bg-green-200 border border-1 rounded-lg grid grid-cols-1 my-2" key={key}>
                                <h2 className="text-2xl font-bold text-red-400 text-center py-2">{service.name}</h2>
                                <p className="px-2 py-4">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </Fragment>
    </>
}

const WhyChooseUsContent = (props: {
    whyChooseUs: {
        points: string[]
    }
}) => {
    let localization = useLocalization()
    const [title, setTitle] = useState<string>(`Why Choose Us`)

    useEffect(()=> {
        if (localization == `jp`) {
            setTitle(`当社を選ぶ理由`)
        }
    
    })
    return <>
        <Fragment>
            <div className="my-4">
                <h1 className="text-4xl text-center font-bold">{title}</h1>
                <div className="mx-8">
                    <ul className="list-disc">
                        {props.whyChooseUs.points.map((point, key) => (
                            <li key={key}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    </>
}

const ClosingMessage = (props: {
    closingMessage: string
}) => {
    return <>
        <Fragment>
            <div className="my-4 text-center text-xl">
                {props.closingMessage}
            </div>
        </Fragment>
    </>
}

export const AboutUsSection = (props: AboutUsProps) => {
    return <>
        <Fragment>
            <div className="py-4 grid grid-cols-1 px-4">
                <WelcomeMessage welcomeMessage={props.welcomeMessage} />
                <MissionContent mission={props.mission} />
                <ServicesContent services={props.services} />                
                <WhyChooseUsContent whyChooseUs={props.whyChooseUs} />
                <ClosingMessage closingMessage={props.closingMessage} />
            </div>
        </Fragment>
    </>
}