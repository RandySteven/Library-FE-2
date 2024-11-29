import { ImageProp } from "@/interfaces/props/ImageProp"
import { Fragment } from "react"

export const Image = (prop : ImageProp) => {
    return <>
        <Fragment>
            <img 
                src={prop.imgSrc}
                className={prop.imgClass}
                alt={prop.imgAlt}
                height={prop.imgHeight}
                width={prop.imgWidth}
            />
        </Fragment>
    </>
}