import { AuthButton } from "@/components/Elements/AuthButton"
import { Image } from "@/components/Elements/Image"
import { BookDetail } from "@/components/Fragments/BookDetail"
import { useBookDetail } from "@/hooks/bookPageHook"
import { Fragment } from "react"

export const BookLayout = (props : {
    id: string
}) => {
    const book = useBookDetail(props.id)

    return <>
        <Fragment>
            <div className="grid grid-cols-2">
                {/* <Image 
                    imgAlt={`image_for_${props.id}`}
                    imgClass="rounded"
                    imgHeight={800}
                    imgWidth={400}
                    imgSrc={book.image}
                /> */}
                <BookDetail
                    title={book.title}
                    description={book.description}
                    authors={book.authors}
                    genres={book.genres}
                    createdAt={book.created_at}
                    rating={book.rating}
                />
                <AuthButton>
                    <button>
                        test
                    </button>
                </AuthButton>
            </div>
        </Fragment>
    </>
}