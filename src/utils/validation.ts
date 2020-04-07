import * as yup from 'yup'

yup.setLocale({
  // @ts-ignore
  mixed: {
    required: 'yup:required',
    // @ts-ignore
    notType: ({ path, type }) => ({
      key: 'yup:notType',
      options: { path, type },
    }),
    oneOf: ({ values }) => ({
      key: 'yup:oneOf',
      options: { values },
    }),
    notOneOf: ({ values }) => ({
      key: 'yup:notOneOf',
      options: { values },
    }),
  },
  string: {
    email: 'yup:email',
    url: 'yup:url',
    trim: 'yup:trim',
    lowercase: 'yup:lowercase',
    uppercase: 'yup:uppercase',
    min: ({ min }) => ({ key: 'yup:minLength', options: { min } }),
    max: ({ max }) => ({ key: 'yup:maxLength', options: { max } }),
    length: ({ length }) => ({ key: 'yup:length', options: { length } }),
  },
  number: {
    min: ({ min }) => ({ key: 'yup:min', options: { min } }),
    max: ({ max }) => ({ key: 'yup:max', options: { max } }),
    lessThan: ({ less }) => ({ key: 'yup:lessThan', options: { less } }),
    moreThan: ({ more }) => ({ key: 'yup:moreThan', options: { more } }),
    positive: 'yup:positive',
    negative: 'yup:negative',
    integer: 'yup:integer',
  },
  date: {
    min: ({ min }) => ({ key: 'yup:dateMin', options: { min } }),
    max: ({ max }) => ({ key: 'yup:dateMax', options: { max } }),
  },
  array: {
    min: ({ min }) => ({ key: 'yup:arrayMin', options: { min } }),
    max: ({ max }) => ({ key: 'yup:arrayMax', options: { max } }),
  },
  object: {
    noUnknown: 'yup:noUnknown',
  },
})

export default yup
