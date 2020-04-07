import { useTranslation } from '@server/i18n'
import { ErrorMessage } from 'formik'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Box, Text } from '@/components/atoms/System'

interface FormikErrorProps {
  name: string
}

interface ErrorProps {
  message: string | { key: string; options: any }
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  if (!message) return null
  const errorMessage = typeof message === 'string' ? t(message) : t(message.key, message.options)

  return (
    <Text display="block" fontSize="xxxs" color={theme.colors.error}>
      {errorMessage}
    </Text>
  )
}

export const FormikError: React.FC<FormikErrorProps> = ({ name }) => {
  return (
    <Box mt={5}>
      <ErrorMessage
        name={name}
        render={(message: string | { key: string; options: any }) => {
          return <Error message={message} />
        }}
      />
    </Box>
  )
}
