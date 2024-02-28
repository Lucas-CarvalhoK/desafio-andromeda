import { InputHTMLAttributes } from 'react'

export interface PlanDescriptionType
  extends InputHTMLAttributes<HTMLInputElement> {
  total: number
  currentValue: number
}
