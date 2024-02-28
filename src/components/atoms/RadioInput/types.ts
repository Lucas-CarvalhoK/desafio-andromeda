import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  options: Array<string>
}
