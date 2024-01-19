import { InputHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  variant: 'Standard' | 'Filled' | 'Outlined'
}
