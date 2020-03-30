import { default as NextLink, LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Link = NextLink

type ActiveLinkProps = LinkProps & {
  activeClassName?: string
  exact?: boolean
  render?: (isActive: boolean) => any
  children?: React.ReactElement
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  exact,
  activeClassName = 'active',
  render,
  ...otherProps
}: ActiveLinkProps) => {
  const router = useRouter()
  const child = children && React.Children.only(children)

  const routerPath = router.asPath ? router.asPath : router.pathname
  const match = router.asPath ? otherProps.as : href

  const condition = exact
    ? Boolean(routerPath === match)
    : Boolean(routerPath.startsWith(String(match)))

  const className = condition ? activeClassName : undefined

  return (
    <Link href={href} {...otherProps}>
      {render
        ? render(condition)
        : child &&
          React.cloneElement(child, { className: [child.props.className, className].join(' ') })}
    </Link>
  )
}
