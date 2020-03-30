import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Contain, Heading, Text } from '@/components/atoms/System'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo title="About" description="This is the about page" />
      <Contain>
        <Heading as="h1" color="primary">
          About
        </Heading>
        <Text as="p">This is the about page</Text>
      </Contain>
    </>
  )
}

export default Page
