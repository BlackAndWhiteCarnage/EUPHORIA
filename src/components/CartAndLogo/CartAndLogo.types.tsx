import { CartType } from 'Root'

export interface CartAndLogoProps {
    cart: CartType['cart']
}

export interface CartChangeType {
    cartChange: boolean
    setCartChange: React.Dispatch<React.SetStateAction<boolean>>
}
