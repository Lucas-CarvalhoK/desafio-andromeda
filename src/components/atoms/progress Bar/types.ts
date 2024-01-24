import { InputHTMLAttributes } from 'react'

export interface progressBarType extends InputHTMLAttributes<HTMLInputElement> {
  total: number
  currentValue: number
}
