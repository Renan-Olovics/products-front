import type { LegacyRef } from 'react'
import { forwardRef } from 'react'

import type { ReactInputMask } from 'react-input-mask'
import InputMask from 'react-input-mask'

export type BasicInputProps = {
  label?: string
  error?: string
  mask?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const BasicInput = forwardRef(
  (
    { label, type = 'text', error, mask, ...rest }: BasicInputProps,
    ref: LegacyRef<HTMLInputElement | ReactInputMask>
  ) => {
    const className = `text-black dark:text-gray-300 ${error ? 'error' : ''}
    bg-slate-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-800
      ${rest.disabled ? 'text-gray-600 dark:text-gray-300' : ''} rounded `

    return (
      <div className="flex rounded flex-col">
        {label && (
          <label htmlFor={rest.name} className="text-mad mb-1 text-black dark:text-gray-200">
            {label}\rules\ban-ts-comment
          </label>
        )}
        {mask ? (
          /* @ts-ignore */
          <InputMask ref={ref} className={className} type={type} mask={mask} {...rest} />
        ) : (
          /* @ts-ignore */
          <input ref={ref} className={className} type={type} {...rest} />
        )}
        {error && <span className="error">{error}</span>}
      </div>
    )
  }
)
