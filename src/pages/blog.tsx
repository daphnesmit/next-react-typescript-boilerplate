import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Contain, Heading, Text } from '@/components/atoms/System'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo title="Blog" description="This is the blog page" />
      <Contain>
        <Heading as="h1" color="primary">
          Blog
        </Heading>
        <Text as="p">This is the blog page</Text>
      </Contain>
    </>
  )
}

export default Page
