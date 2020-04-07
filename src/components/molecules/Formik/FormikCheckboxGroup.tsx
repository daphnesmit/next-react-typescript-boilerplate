import { FastField, FastFieldProps } from 'formik'
import React, { FC } from 'react'

import { Omit } from '@/utils/types'

import { FieldCheckBoxGroup, FieldCheckBoxGroupProps } from '../Form/FieldCheckboxGroup'
import { FormikError } from './FormikError'

type FormikCheckBoxGroupProps = Omit<FieldCheckBoxGroupProps, 'onChange' | 'value'>

export const FormikCheckBoxGroup: FC<FormikCheckBoxGroupProps> = ({ name, ...props }) => {
  return (
    <>
      <FastField name={name}>
        {({ field, form, meta }: FastFieldProps) => {
          return (
            <FieldCheckBoxGroup
              {...props}
              {...field}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const target = e.currentTarget
                const newValue = [...field.value] || []
                if (target.checked) {
                  newValue.push(target.value)
                } else {
                  newValue.splice(
                    newValue.findIndex(item => item === target.value),
                    1,
                  )
                }
                form.setFieldValue(name, newValue)
              }}
              hasError={meta.touched && meta.error}
            />
          )
        }}
      </FastField>

      <FormikError name={name} />
    </>
  )
}
