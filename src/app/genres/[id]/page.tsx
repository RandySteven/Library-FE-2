import { GenreLayout } from "@/layouts/GenreLayout";
import { Fragment, use } from "react";

export default function Home({params} : IDParam) {
    const resolvedParams = use(params);
    return (
        <Fragment>
            <GenreLayout id={resolvedParams.id}/>
        </Fragment>
    );
  }
  