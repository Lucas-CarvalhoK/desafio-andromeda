import { HTMLAttributes } from 'react'

export interface StorageCountType extends HTMLAttributes<HTMLDivElement> {
  GbFault: number
  text: string
}
