import { customerProvider } from "@/customer-provider";
import { customPageTitleToPath, unique } from "@/lib/utils";
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

    const customer = await customerProvider.getCustomerByDomain(domain);
    if (customer == null) return { notFound: true };

    const localePages = customer.pages.filter(p => p.lang === locale);
    if (localePages.length === 0) return { notFound: true };

    const page = localePages.find(p => customPageTitleToPath(p.title) === customPageTitleToPath(route));
    if (page == null) return { notFound: true };

    return {
        props: {
            customerName: customer.name,
            languageOptions: customer.pages.map(p => p.lang).filter(unique),
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
    const customers = await customerProvider.getCustomers();

    const paths = customers
        .flatMap(customer => customer.pages
            .map(page => ({
                locale: page.lang,
                params: {
                    domain: customer.domain,
                    route: customPageTitleToPath(page.title),
                }
            }))
        );

    return {
        paths,
        fallback: 'blocking',
    }
}

export { default } from './index';