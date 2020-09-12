import CartView from './src/views/CartView/CartView';
import SettlementView from './src/views/SettlementView/SettlementView';
import AddressView from './src/views/AddressView/AddressView';

// CartView
export interface CartListItem {
    id: string;
    img: string;
    name: string;
    property: string;
    price: number;
    amount: number;
    maxAmount: number;
    isSelected: boolean;
}
export interface MayLikeListItem {
    id: string;
    img: string;
    name: string;
    place: string;
    price: number;
}

// SettlementView
export interface OrderListItem {
    id: string;
    name: string;
    property: string;
    price: number;
    amount: number;
    freight: number;
    maxAmount: number;
    img: string;
}
export interface VoucherListItem {
    limit: number;
    price: number;
    isSelected: boolean;
}
export interface CouponListItem {
    price: number;
    isSelected: boolean;
}

// AddressView
export interface AddressListItem {
    name: string;
    tel: string;
    remarks: string;
    address: string;
    isDefault: boolean;
}