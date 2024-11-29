import { HomeBody } from "@/components/Fragments/HomeBody"
import { HomeHeader } from "@/components/Fragments/HomeHeader"
import { Fragment } from "react"

export const HomeLayout = () => {
    return <>
        <Fragment>
            <HomeHeader />
            <HomeBody />
        </Fragment>
    </>
}