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
} from '@/components/atoms/System'
import { Api } from '@/services/Api'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  const { data, error } = useSWR('getGithubUser', Api.getGithubUser)

  console.log(data)
  return (
    <>
      <NextSeo title="Homepage" description="This is the homepage" />

      <Contain>
        <Heading as="h1" color="primary">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>

        <Paragraph>
          Get started by editing <code>src/pages/index.tsx</code>
        </Paragraph>

        <Row>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://nextjs.org/docs">
                <Heading as="h3">Documentation &rarr;</Heading>
                <Paragraph>Find in-depth information about Next.js features and API.</Paragraph>
              </a>
            </Card>
          </Column>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://nextjs.org/learn">
                <Heading as="h3">Learn &rarr;</Heading>
                <Paragraph>Learn about Next.js in an interactive course with quizzes!</Paragraph>
              </a>
            </Card>
          </Column>
        </Row>
        <Row>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://github.com/zeit/next.js/tree/master/examples">
                <Heading as="h3">Examples &rarr;</Heading>
                <Paragraph>Discover and deploy boilerplate example Next.js projects.</Paragraph>
              </a>
            </Card>
          </Column>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <Heading as="h3">Deploy &rarr;</Heading>
                <Paragraph>
                  Instantly deploy your Next.js site to a public URL with ZEIT Now.
                </Paragraph>
              </a>
            </Card>
          </Column>
        </Row>

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
