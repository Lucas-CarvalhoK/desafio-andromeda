import { InputHTMLAttributes } from 'react'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  children: string
  label: string
}
