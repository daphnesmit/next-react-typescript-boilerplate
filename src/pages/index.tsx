import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Hyperlink } from '@/components/atoms/Hyperlink'
import { Card, Column, Contain, Heading, Paragraph, Row } from '@/components/atoms/System'

interface PageProps {}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo title="Homepage" description="This is the homepage" />

      <Contain>
        <Heading as="h1" color="primary">
          Welcome to <Hyperlink href="https://nextjs.org">Next.js!</Hyperlink>
        </Heading>

        <Paragraph>
          Get started by editing <code>src/pages/index.tsx</code>
        </Paragraph>

        <Row>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://nextjs.org/docs">
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Card>
          </Column>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://nextjs.org/learn">
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
            </Card>
          </Column>
        </Row>
        <Row>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://github.com/zeit/next.js/tree/master/examples">
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
            </Card>
          </Column>
          <Column col={[12, 6]}>
            <Card p="xs" border="1px solid" borderColor="primary" mb={30}>
              <a href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <h3>Deploy &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with ZEIT Now.</p>
              </a>
            </Card>
          </Column>
        </Row>
      </Contain>
    </>
  )
}

export default Page
