import { FastField, FastFieldProps } from 'formik'
import React from 'react'

import { Checkbox, CheckBoxProps } from '@/components/atoms'

import { FormikError } from './FormikError'

type FormikCheckboxProps = CheckBoxProps & {
  name: string
}

export const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, children, ...props }) => {
  return (
    <>
      <FastField name={name}>
        {({ field, form, meta }: FastFieldProps) => {
          return (
            <Checkbox
              {...props}
              {...field}
              hasError={meta.touched && meta.error}
              value={'true'}
              checked={meta.value}
              onChange={e => form.setFieldValue(name, e.currentTarget.checked)}>
              {children}
            </Checkbox>
          )
        }}
      </FastField>

      <FormikError name={name} />
    </>
  )
}
