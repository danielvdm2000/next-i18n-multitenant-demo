import { PageContainer } from '@/components/page-container';
import { customerProvider } from '@/customer-provider';
import { customPageTitleToPath, unique } from '@/lib/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link';

export type FrontpageProps = {
  customerName: string;
  pages: Array<{
    title: string;
    path: string;
  }>;
  languageOptions: string[],
  page: {
    title: string;
    content: string;
  }
}

type PathsResult = {
  domain: string;
}

export const getStaticProps: GetStaticProps<FrontpageProps, PathsResult> = async ({ locale, params }) => {
  if (locale == null) throw new Error("locale is undefined");

  const domain = params?.domain;
  if (domain == null) throw new Error("domain is undefined");

  const customer = await customerProvider.getCustomerByDomain(domain);
  if (customer == null) throw new Error(`Could not find a customer with the domain of ${domain}`);

  const localePages = customer.pages.filter(p => p.lang === locale);
  if (localePages.length === 0)
    throw new Error(`${customer.name} has no translations for ${locale}`);

  const page = localePages[0];

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

  return {
    paths: customers.map(customer => ({
      params: {
        domain: customer.domain,
      }
    })),
    fallback: 'blocking',
  }
}

const Home: NextPage<FrontpageProps> = ({ customerName, page, pages, languageOptions }) => {
  const { t } = useTranslation();

  return (
    <PageContainer languageOptions={languageOptions} customerName={customerName}>
      <p>{t('hello')}</p>

      <div className='flex gap-4'>
        {pages.map(p => (
          <Link
            key={p.path}
            className={page.title === p.title ? `text-blue-800` : 'text-blue-300'}
            href={'/' + p.path}
          >
            {p.title}
          </Link>
        ))}
      </div>

      <h2>{page.title}</h2>
      <article>
        {page.content}
      </article>

      <Link href="/other-page">Other page</Link>
    </PageContainer>
  )
}

export default Home;