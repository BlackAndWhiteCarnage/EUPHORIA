import { DataType } from 'helpers/useFetch';
import { ToggleExtrasType, PickExtrasType } from 'views/Product/Product.types';
import { CartType } from 'Root';

export interface ExtrasWrapperProps {
    data: DataType['data']
    setExtrasData: any
    extrasData: any
    toggleExtras: ToggleExtrasType['toggleExtras']
    setToggleExtras: ToggleExtrasType['setToggleExtras']
    pickExtras: PickExtrasType['pickExtras']
    setPickExtras: PickExtrasType['setPickExtras']
    cart: CartType['cart']
    setCart: CartType['setCart']
  }

export interface PrevCartType {
    prevCartItem: {}[] | undefined
    setPrevCartItem: React.Dispatch<React.SetStateAction<{}[] | undefined>>
}
