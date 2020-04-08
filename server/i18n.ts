// eslint-disable-next-line import/no-duplicates
import dateFormat from 'date-fns/format'
// eslint-disable-next-line import/no-duplicates
import nl from 'date-fns/locale/nl'
import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  localePath: 'public/locales',
  ns: ['common', 'yup'],
  defaultNS: 'common',
  defaultLanguage: 'nl',
  otherLanguages: ['en'],
  interpolation: {
    format: function (value, format) {
      if (value instanceof Date) {
        return dateFormat(new Date(value), format || 'PPP', { locale: nl })
      }
      if (format === 'capitalize') {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
      }
      return value
    },
  },
})

export default NextI18NextInstance

export const { appWithTranslation, Link, Router, Trans, useTranslation } = NextI18NextInstance
