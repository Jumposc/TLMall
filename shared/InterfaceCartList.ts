export interface RequestCartList {
    token: string;
}

export interface ResponseCartList {
    CartList: {
        id: string;
        img: string;
        name: string;
        property: string;
        price: number;
        amount: number;
        maxAmount: number;
        isSelected: boolean;
    }[]
}