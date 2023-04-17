import { Controller } from 'react-hook-form'

import type { BasicInputProps } from '@/components/Atoms'
import { BasicInput } from '@/components/Atoms'

export const Input = ({ name = 'name', defaultValue = '', ...rest }: BasicInputProps) => {
  return (
    <Controller
      {...rest}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => {
        return <BasicInput {...field} {...rest} />
      }}
    />
  )
}
