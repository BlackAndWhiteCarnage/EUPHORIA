import { CartType } from 'Root'

export interface ShopItemProps {
    name: string
    id: string
    images: {
      url: string
    }[]
    cart: CartType['cart']
    published_at: string
}

export interface ShopProps {
    cart: CartType['cart']
}
