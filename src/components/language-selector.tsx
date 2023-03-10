import { useOutsideClick } from "@/hooks/use-outside-click";
import { I18n, useTranslation } from "next-i18next"
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const languageNames: Record<string, string> = {
    'da': 'Dansk',
    'en': 'English',
    'it': 'Italiano',
    'de': 'Deutsch',
    'es': 'Español',
    'sv': 'Svenska',
    'no': 'Norsk',
    'fr': 'Français',
    'nl': 'Nederlands'
}

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));
    const router = useRouter();

    const languages = Object.keys(languageNames);

    return (
        <div className='relative' ref={ref}>
            <div
                className="border rounded p-2 bg-gray-50 cursor-pointer"
                onClick={() => setOpen(v => !v)}
            >
                <div className='flex gap-2 items-center' style={{ width: 130 }}>
                    <img alt={`${languageNames[i18n.resolvedLanguage]} flag`} className='h-6' src={`/flags/${i18n.resolvedLanguage}.svg`} />
                    <p>{languageNames[i18n.resolvedLanguage]}</p>
                </div>
            </div>
            {open && (
                <div className='flex gap-2 flex-col border rounded p-2 bg-gray-50 absolute top-12 right-0 z-10'>
                    {languages.map(lng => (
                        <Link 
                            key={lng} 
                            href='/'
                            // href={router.asPath} 
                            locale={lng} 
                            style={{ width: 130 }} 
                            className='flex gap-2 items-center cursor-pointer'
                        >
                            <img alt={`${languageNames[lng]} flag`} className='h-6' src={`/flags/${lng}.svg`} />
                            <p>{languageNames[lng]}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )

}