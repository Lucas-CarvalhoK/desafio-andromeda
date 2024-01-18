import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  placeholderIcon?: IconType
  error?: string
}
