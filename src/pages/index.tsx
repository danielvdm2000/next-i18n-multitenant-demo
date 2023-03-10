import { LanguageSelector } from '@/components/language-selector';
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <p>{t('hello')}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale == null) throw new Error("locale is undefined");

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ]))
    }
  }
}