import { PageContainer } from "@/components/page-container";
import { customers } from "@/customers";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    languageOptions: string[];
    customerName: string;
}

type PathsResult = {
    domain: string;
}

export const getStaticPaths: GetStaticPaths<PathsResult> = async () => {
    return {
        paths: customers.map(customer => ({
            params: {
                domain: customer.domain,
            }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<Props, PathsResult> = async ({ locale, params }) => {
    if (locale == null) throw new Error("locale is undefined");

    const domain = params?.domain;
    if (domain == null) throw new Error('domain is undefined');

    const customer = customers.find(c => c.domain === domain);
    if (customer == null) return { notFound: true };

    return {
        props: {
            customerName: customer.name,
            languageOptions: Object.keys(customer.pages),
            ...(await serverSideTranslations(locale, [
                'common',
            ]))
        }
    }
}

const OtherPage: NextPage<Props> = ({ languageOptions, customerName }) => {
    const { t } = useTranslation();

    return (
        <PageContainer languageOptions={languageOptions} customerName={customerName}>
            <p>{t('hello')}</p>
        </PageContainer>
    )
}

export default OtherPage;