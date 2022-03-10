import { CartType } from 'Root'

export interface ButtonProps {
  text: string
  className?: string | boolean
  click: () => void
  id?: string
  itemID?: any
  cart?: CartType['cart']
}
