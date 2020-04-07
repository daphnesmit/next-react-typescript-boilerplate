import { FormikHelpers } from 'formik'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type SubmitHandler<FormValues> = (
  values: FormValues,
  actions: FormikHelpers<FormValues>,
) => void
