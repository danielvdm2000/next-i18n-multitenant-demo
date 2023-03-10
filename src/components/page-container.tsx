import React from "react";
import { LanguageSelector } from "./language-selector";

type MaybeArray<T> = T[] | T;

type Props = {
    languageOptions: string[];
    customerName: string;
    children: MaybeArray<React.ReactElement>;
}

export const PageContainer: React.FC<Props> = ({ languageOptions, customerName, children }) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div />
                <h1>{customerName}</h1>
                <LanguageSelector languageOptions={languageOptions} />
            </div>

            {children}
        </>
    )
}