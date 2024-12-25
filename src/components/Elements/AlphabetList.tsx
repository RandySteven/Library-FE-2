import Link from "next/link";
import { Fragment } from "react"

export const AlphabetList = () => {

    let alphabet = []
    for(let i = 0 ; i < 26 ; i++) {
        alphabet.push(String.fromCharCode(65 + i));
    }

    return <>
        <Fragment>
            <div className="flex text-center">
                {alphabet.map((letter, index) => (
                    <Link href="#" key={index} className="px-4 text-green-500 font-bold hover:text-green-600 hover:text-underline">
                        {letter}
                    </Link>
                ))}            
            </div>
        </Fragment>
    </>
}