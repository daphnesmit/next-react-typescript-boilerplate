import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import useSWR from 'swr'

import { Image } from '@/components/atoms/Image'
import { Loader } from '@/components/atoms/Loader'
import {
  Box,
  Card,
  Column,
  Contain,
  Flex,
  Heading,
  Paragraph,
  Row,
  Text,
} from '@/components/atoms/System'
import { Api } from '@/services/Api'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  const { data, error } = useSWR('getGithubUser', Api.getGithubUser)

  return (
    <>
      <NextSeo title="About" description="This is the about page" />
      <Contain>
        <Heading as="h1" color="primary">
          About
        </Heading>
        <Text as="p">This is the about page</Text>

        <Heading as="h2">Example Api Request</Heading>
        <Row>
          <Column col={[12]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              {error && <Paragraph>Failed to load</Paragraph>}
              {!data && <Loader />}
              {data && (
                <Flex flexDirection={['column', 'row']}>
                  <Card mr="xs" width="100px" height="100px" borderRadius="100%" overflow="hidden">
                    <Image
                      preload={data.avatar_url}
                      src={data.avatar_url}
                      alt={data.name}
                      caption={data.name}
                    />
                  </Card>
                  <Box>
                    <Paragraph>
                      Name: {data.name}
                      <br />
                      Bio: {data.bio}
                      <br />
                      Link: {data.html_url}
                    </Paragraph>
                  </Box>
                </Flex>
              )}
            </Card>
          </Column>
        </Row>
      </Contain>
    </>
  )
}

export default Page
