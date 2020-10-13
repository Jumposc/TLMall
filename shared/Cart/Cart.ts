export interface CartItem {
    id: string,
    amount: number,
    spec: string,
    isSelected?: boolean
}

export interface DisplayCartItem extends CartItem {
    name: string,
    imageUrl: string,
    price: number,
    freight: number,
    maxAmount: number,
}

export interface CartProductInfo {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    freight: number,
    maxAmount: number,
}