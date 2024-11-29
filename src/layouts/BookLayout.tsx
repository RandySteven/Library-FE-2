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
            <div className="mx-16 flex flex-row my-5">
                <Image 
                    imgAlt={`image_for_${props.id}`}
                    imgClass="rounded border border-black"
                    imgHeight={800}
                    imgWidth={400}
                    imgSrc={book.image}
                />
                <div className="basis-3/4 w-full">
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
                            Add to bag
                        </button>
                    </AuthButton>
                </div>
            </div>
        </Fragment>
    </>
}