import { Fragment, useEffect, useState } from "react";

export const getLocalization = () : string=> {
    const local = localStorage.getItem("language") ?? "en"; 
    return local
}

export const getAuthors = (authors: { 
    id: number; 
    name: string; 
}[]): React.ReactNode[] => {
    return authors.map((content) => (
        <a key={content.id} href={`/authors/${content.id}`}>
            {content.name}
        </a>
    ));
};

export const getGenres = (genres: { 
    id: number; 
    genre: string; 
}[]): React.ReactNode => {
    return genres.map((content, index) => (
        <Fragment key={content.id}>
            <a href={`/genres/${content.id}`} className="bg-green-200 text-black px-2 py-2 rounded hover:bg-green-300">{content.genre}</a>
            {index < genres.length - 1 && " | "}
        </Fragment>
    ));
};
