import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  label: string
}
