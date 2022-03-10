import React from 'react';
import { DataType } from 'helpers/useFetch';
import { ToggleExtrasType, PickExtrasType } from 'views/Product/Product.types';
import { CartType } from 'Root';
import { PrevCartType } from 'views/Product/components/ExtrasWrapper/ExtrasWrapper.types';

export interface ExtrasProviderProps {
    children: React.ReactNode
    cart: CartType['cart']
    data: DataType['data']
    setExtrasData: any
    setToggleExtras: ToggleExtrasType['setToggleExtras']
    setPickExtras: PickExtrasType['setPickExtras']
    setCart: CartType['setCart']
    pickExtras: PickExtrasType['pickExtras']
    setPrevCartItem: PrevCartType['setPrevCartItem']
    prevCartItem: PrevCartType['prevCartItem']
}
