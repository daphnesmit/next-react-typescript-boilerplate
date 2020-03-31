import { useTranslation } from '@server/i18n'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Contain, Heading, Text } from '@/components/atoms/System'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo title="Blog" description="This is the blog page" />
      <Contain>
        <Heading as="h1" color="primary">
          Blog
        </Heading>
        <Text as="p">This is the blog page</Text>

        <Heading as="h2">Example Translations: {t('title')}</Heading>
        <Text as="p">{t('text')}</Text>
      </Contain>
    </>
  )
}

Page.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  }
}

export default Page
