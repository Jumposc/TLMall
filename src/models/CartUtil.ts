export interface CartItem {
    productId: string,
    spec: string,
    amount: number,
    isSelected?: boolean
}

export interface DisplayCartItem extends CartItem {
    name: string,
    imageUrl: string,
    price: number
}

// 购物车
export class CartUtil {

    static getList(): Promise<DisplayCartItem[]> {
        throw new Error('TODO')
    }

    /** 往购物车中增加商品 */
    static add(items: CartItem[]): Promise<void> {
        throw new Error('TODO')
    }

    /** 下单 */
    static placeOrder(): Promise<{ orderId: string }> {
        throw new Error('TODO')
    }

    /** 直接购买 */
    static buy(items: CartItem[]): Promise<{ orderId: string }> {
        throw new Error('TODO')
    }

}