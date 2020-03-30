import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Hyperlink, Icon, Reveal } from '@/components/atoms'
import { Box, Card, Column, Contain, Flex, Heading, Row, Text } from '@/components/atoms/System'
import { icons } from '@/theme'

const Section: React.FC = props => (
  <Reveal>
    <Box py={30} {...props} />
  </Reveal>
)

const SectionHeader: React.FC = props => (
  <Card borderBottom="1px solid" borderColor="primary" mb={30}>
    <Heading {...props} />
  </Card>
)

const GridExampleBox: React.FC = props => (
  <Box bg="primary" color="white" p={15} my={5} fontSize={14} {...props} />
)

const Page: NextPage = () => {
  return (
    <>
      <NextSeo title="Examples" description="Examples of the components in this setup" />
      <Contain>
        <Section>
          <SectionHeader>Grid</SectionHeader>
          <Row>
            <Column col={[12, 4]}>
              <GridExampleBox>1</GridExampleBox>
            </Column>
            <Column col={[12, 4]}>
              <GridExampleBox>2</GridExampleBox>
            </Column>
            <Column col={[12, 4]}>
              <GridExampleBox>3</GridExampleBox>
            </Column>
          </Row>
        </Section>

        <Section>
          <SectionHeader>Typography</SectionHeader>

          <Heading as="h1">Heading 1</Heading>
          <Heading as="h2">Heading 2</Heading>
          <Heading as="h3">Heading 3</Heading>
          <Heading as="h4">Heading 4</Heading>
          <Heading as="h5">Heading 5</Heading>
          <Heading as="h6">Heading 6</Heading>
          <Text as="strong">Strong</Text>
          <Text as="p">Paragraph</Text>
        </Section>

        <Section>
          <SectionHeader>Icons</SectionHeader>

          <Flex flexWrap="wrap">
            {Object.keys(icons).map(icon => (
              <Box key={icon} p={5}>
                <Icon icon={icon as keyof typeof icons} size={50} color="secondary"></Icon>
              </Box>
            ))}
          </Flex>
        </Section>

        <Section>
          <SectionHeader>Links</SectionHeader>
          <Hyperlink href="/about">This is a link</Hyperlink>
        </Section>
      </Contain>
    </>
  )
}

export default Page
