import { DataType } from 'helpers/useFetch';
import { ExtrasDataType, ToggleExtrasType, PickExtrasType } from 'views/Product/Product.types';
import { CartType } from 'Root';

export interface ProductInfoWrapperProps {
    data: DataType['data']
    extrasData: ExtrasDataType['extrasData']
    toggleExtrasHandler: () => void
    setExtrasData: ExtrasDataType['setExtrasData']
    toggleExtras: ToggleExtrasType['toggleExtras']
    setToggleExtras: ToggleExtrasType['setToggleExtras']
    pickExtras: PickExtrasType['pickExtras']
    setPickExtras: PickExtrasType['setPickExtras']
    addToCartHandler: () => void
    cart: CartType['cart']
    setCart: CartType['setCart']
}
