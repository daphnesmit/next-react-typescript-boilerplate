import React from 'react'

import { Radio } from './Radio'

export default { title: 'Forms|Radio', component: Radio }

export const example = () => (
  <>
    <Radio name="gender" value="male">
      Male
    </Radio>
    <Radio name="gender" value="female">
      Female
    </Radio>
    <Radio name="gender" value="other">
      Other
    </Radio>
  </>
)
