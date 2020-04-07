import { FastField, FastFieldProps } from 'formik'
import React from 'react'

import { FieldSelect, FieldSelectProps } from '../Form/FieldSelect'
import { FormikError } from './FormikError'

type FormikSelectProps = FieldSelectProps & {
  name: string
}

export const FormikSelect: React.FC<FormikSelectProps> = ({ name, ...props }) => {
  return (
    <>
      <FastField name={name}>
        {({ field, form, meta }: FastFieldProps) => {
          return (
            <FieldSelect
              {...props}
              {...field}
              onBlur={() => form.setFieldTouched(name, true)}
              onChange={option => {
                // @ts-ignore
                form.setFieldValue(name, option && !Array.isArray(option) && option.value)
              }}
              hasError={Boolean(meta.touched && meta.error)}
            />
          )
        }}
      </FastField>

      <FormikError name={name} />
    </>
  )
}
