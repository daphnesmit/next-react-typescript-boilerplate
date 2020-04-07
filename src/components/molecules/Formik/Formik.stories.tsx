import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import { Button, Flex } from '@/components/atoms'
import { SubmitHandler } from '@/utils/types'

import { FormikInput } from './FormikInput'

export default { title: 'Forms|Formik' }

interface ExampleValues {
  name: string
  age?: number
}

export const example = () => {
  const submitHandler: SubmitHandler<ExampleValues> = async (values, actions) => {
    actions.setSubmitting(true)
    console.log(values, actions)
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 3000)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3),
    age: Yup.number()
      .nullable()
      .required('Age is required')
      .min(18, 'You have to be at least 18 years old'),
  })

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={submitHandler}
      initialValues={{
        name: '',
      }}>
      {() => (
        <Form>
          <FormikInput label="Name" name="name"></FormikInput>
          <FormikInput label="Age" name="age" type="number"></FormikInput>
          <Flex py={10} justifyContent="flex-end">
            <Button type="submit">Submit</Button>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
