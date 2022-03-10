import { CartType } from 'Root';

export interface ProviderProps {
    children: React.ReactNode
    cart: CartType['cart']
    setCart: CartType['setCart']
}

export interface VerifyAgeType {
    verifyAge: boolean
    setVerifyAge: React.Dispatch<React.SetStateAction<VerifyAgeType['verifyAge']>>
}
