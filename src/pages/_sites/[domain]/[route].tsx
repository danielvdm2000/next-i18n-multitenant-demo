import { customers } from "@/customers";
import { customPageTitleToPath } from "@/lib/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FrontpageProps } from ".";

type PathsResult = {
    domain: string;
    route: string;
}

export const getStaticProps: GetStaticProps<FrontpageProps, PathsResult> = async ({ locale, params }) => {
    if (locale == null) throw new Error("locale is undefined");

    const domain = params?.domain;
    if (domain == null) throw new Error("domain is undefined");

    const route = params?.route;
    if (route == null) throw new Error("route is undefined");

    const customer = customers.find(c => c.domain === domain);
    if (customer == null) return { notFound: true };

    const localePages = customer.pages[locale];
    if (localePages == null || localePages.length === 0) return { notFound: true };

    console.log({localePages})

    const page = localePages.find(p => customPageTitleToPath(p.title) === customPageTitleToPath(route));
    if (page == null) return { notFound: true };

    return {
        props: {
            customerName: customer.name,
            pages: localePages.map(page => ({
                title: page.title,
                path: customPageTitleToPath(page.title),
            })),
            page,
            ...(await serverSideTranslations(locale, [
                'common',
            ]))
        }
    }
}

export const getStaticPaths: GetStaticPaths<PathsResult> = async () => {
    const paths = customers
        .flatMap(customer => Object.entries(customer.pages)
            .flatMap(([lng, pages]) =>
                pages.map(page => ({
                    locale: lng,
                    params: {
                        domain: customer.domain,
                        route: customPageTitleToPath(page.title),
                    }
                }))
            )
        );
        
    return {
        paths,
        fallback: 'blocking',
    }
}

export { default } from './index';