import styled from 'styled-components'

import { Icon } from '@/components/atoms/Icon'
import { ActiveLink, Link } from '@/components/atoms/Link'
import { Box, Flex } from '@/components/atoms/System'

interface HeaderProps {}

const NavigationLink = styled(Box)`
  --border-color: transparent;
  display: block;
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 5px solid var(--border-color);
  &.active {
    --border-color: black;
  }
`

const Navigation: React.FC = () => {
  const items = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/blog',
      title: 'Blog',
    },
    {
      href: '/examples',
      title: 'Examples',
    },
  ]

  return (
    <Flex as="nav">
      {items.map(item => {
        return (
          <Box key={item.title}>
            <ActiveLink href={item.href} passHref>
              <NavigationLink as="a" px={[null, 'xs']} mx="xxs">
                {item.title}
              </NavigationLink>
            </ActiveLink>
          </Box>
        )
      })}
    </Flex>
  )
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex as="header" bg="offWhite" color="black" px="xs" alignItems="center">
      <Box mr={['xxs', 'xs']}>
        <Link href="/">
          <a>
            <Box>
              <Icon icon="Logo" color="black" />
            </Box>
          </a>
        </Link>
      </Box>

      <Navigation></Navigation>
    </Flex>
  )
}
