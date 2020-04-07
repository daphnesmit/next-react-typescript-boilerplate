import React from 'react'

import { Column, Radio, RadioProps, Row } from '@/components/atoms'

interface Option {
  value: string
  label: string
}

export type FieldRadioGroupProps = RadioProps & {
  options: Option[]
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  name: string
  direction?: 'horizontal' | 'vertical'
  value: string | undefined
}

export const FieldRadioGroup: React.FC<FieldRadioGroupProps> = ({
  options,
  value,
  direction = 'vertical',
  onChange,
  ...props
}) => {
  return (
    <Row flexDirection={direction === 'horizontal' ? 'row' : 'column'} flexWrap="wrap">
      {options.map((option, index) => {
        return (
          <Column key={index} my={5}>
            <Radio
              name={`${name}[]`}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              {...props}>
              {option.label}
            </Radio>
          </Column>
        )
      })}
    </Row>
  )
}
