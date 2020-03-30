import { NextPageContext } from 'next'
import React from 'react'

import { ErrorPage } from '@/components/templates'

interface ErrorProps {
  statusCode: number | null
}

class MyError extends React.Component<ErrorProps> {
  static getInitialProps({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <ErrorPage />
  }
}

export default MyError
