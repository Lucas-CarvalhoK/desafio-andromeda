import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface ButtonType extends InputHTMLAttributes<HTMLInputElement> {
  ButtonIcon: IconType
}
