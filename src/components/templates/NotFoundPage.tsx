import { Heading, Paragraph } from '@/components/atoms/System'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Heading as="h1">404</Heading>
      <Paragraph>The page you&apos;re trying to visit doesn&apos;t exist (anymore).</Paragraph>
    </>
  )
}
