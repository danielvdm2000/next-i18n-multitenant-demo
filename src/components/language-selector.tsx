import { useOutsideClick } from "@/hooks/use-outside-click";
import { useTranslation } from "next-i18next"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { languageNames } from '../../next-i18next.config';

interface Props {
    languageOptions: string[];
}

const validPages = [
    '/other-page'
]

export const LanguageSelector: React.FC<Props> = ({ languageOptions }) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));
    const router = useRouter();

    return (
        <div className='relative' ref={ref}>
            <div
                className="border rounded p-2 bg-gray-50 cursor-pointer"
                onClick={() => setOpen(v => !v)}
            >
                <div key={i18n.language} className='flex gap-2 items-center' style={{ width: 130 }}>
                    <Image width={32} height={24} alt={`${languageNames[i18n.language]} flag`} src={`/flags/${i18n.language}.svg`} />
                    <p>{languageNames[i18n.language]}</p>
                </div>
            </div>
            {open && (
                <div className='flex gap-2 flex-col border rounded p-2 bg-gray-50 absolute top-12 right-0 z-10'>
                    {languageOptions.map(lng => (
                        <Link
                            key={lng}
                            href={validPages.some(p => router.asPath === p) ? router.asPath : '/'}
                            locale={lng}
                            style={{ width: 130 }}
                            className='flex gap-2 items-center cursor-pointer'
                            onClick={() => setOpen(false)}
                        >
                            <Image width={32} height={24} alt={`${languageNames[lng]} flag`} src={`/flags/${lng}.svg`} />
                            <p>{languageNames[lng]}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )

}