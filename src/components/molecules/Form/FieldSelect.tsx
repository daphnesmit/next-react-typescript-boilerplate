import React, { FocusEventHandler } from 'react'
import Select from 'react-select'
import { ValueType } from 'react-select/src/types'
import styled from 'styled-components'

import { Box, IconButton } from '@/components/atoms'
import { colors } from '@/theme/colors'

interface Option {
  value: string | number
  label: string | number
}

export interface FieldSelectProps {
  isClearable?: boolean
  isSearchable?: boolean
  minWidth?: number
  options: Option[]
  value?: string | number
  placeholder?: string
  label?: string
  onBlur?: FocusEventHandler
  onChange?: (value: ValueType<Option>, action: any) => void
  name?: string
  disabled?: boolean
  hasError?: boolean
}

const INPUT_HEIGHT = '50px'

const SelectWrapper = styled.div<{ hasError?: boolean; minWidth: number | undefined }>`
  width: 100%;
  max-width: 100%;
  ${({ minWidth }) => `min-width: ${minWidth}px;`}
  .reactselect__control {
    border-radius: 0;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ hasError }) => (hasError ? colors.error : colors.grey.dark)};
    min-height: ${INPUT_HEIGHT};
    &:hover {
      border-color: ${colors.grey.dark};
    }
    &--is-focused {
      outline: none !important;
      box-shadow: none;
    }

    &--menu-is-open {
      box-shadow: none;
    }
  }

  .reactselect__value-container {
    padding: 0;
    height: ${INPUT_HEIGHT};
  }

  .reactselect__menu {
    box-shadow: none;
    border: 1px solid ${colors.grey.dark};
    border-radius: 0;
    margin-top: -1px;
  }

  .reactselect__menu-list {
    padding: 0;
  }

  .reactselect__indicator-separator {
    display: none;
  }

  .reactselect__option {
    &--is-focused {
      background-color: ${colors.grey.lighter};
    }
    &--is-selected {
      background-color: ${colors.grey.light};
    }
    &:active {
      background-color: ${colors.grey.medium};
      color: #fff;
    }
  }
`

export const FieldSelect: React.FC<FieldSelectProps> = ({
  label,
  value,
  options,
  disabled,
  minWidth = 200,
  isClearable = true,
  placeholder,
  hasError,
  ...props
}) => {
  return (
    <SelectWrapper hasError={hasError} minWidth={minWidth}>
      <Select
        components={{
          DropdownIndicator: ddProps => {
            return (
              <Box px={8}>
                <IconButton
                  tabIndex={-1}
                  aria-label={'Uitklappen'}
                  icon={'Chevron'}
                  size={18}
                  padding={0}
                  rotate={ddProps.selectProps.menuIsOpen ? -180 : 0}
                />
              </Box>
            )
          },
          ClearIndicator: clearProps => (
            <Box px={10}>
              <IconButton
                aria-label={'Wissen'}
                onClick={clearProps.clearValue}
                icon={'CloseLight'}
                rotate={-180}
                size={14}
                padding={0}
              />
            </Box>
          ),
        }}
        // menuIsOpen
        classNamePrefix="reactselect"
        isDisabled={disabled}
        isSearchable
        placeholder={placeholder || label || 'Select'}
        noOptionsMessage={() => 'No options'}
        isClearable={isClearable}
        value={options.find(item => item.value === value)}
        options={options}
        {...props}
      />
    </SelectWrapper>
  )
}
