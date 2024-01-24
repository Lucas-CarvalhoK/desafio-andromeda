import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonIcon: IconType
}
