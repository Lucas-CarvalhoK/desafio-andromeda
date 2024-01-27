import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  variant: 'Standard' | 'Filled' | 'Outlined'
}
