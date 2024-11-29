"use client"
import { BookLayout } from '@/layouts/BookLayout';
import { Fragment, use } from 'react';

export default function Home( {params} : IDParam ) {
    const resolvedParams = use(params);
    return (
        <>
            <Fragment>
                <BookLayout id={resolvedParams.id} />
            </Fragment>
        </>
    );
  }