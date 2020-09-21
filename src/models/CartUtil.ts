import { OrderUtil } from './OrderUtil'

export interface CartItem {
    productId: string,
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


// 购物车
export class CartUtil {
    static _data: { [userId: string]: CartItem[] } = {
        '11111': [
            {
                productId: "11",
                amount: 5,
                spec: "绿色",
                isSelected: true,
            }
        ],
    }

    static pList = [
        {
            productId: '11',
            name: '111',
            imageUrl: '2222',
            price: 1000,
            freight: 0,
            maxAmount: 10,
        },
        {
            productId: '22',
            name: '555',
            imageUrl: '666',
            price: 1000,
            freight: 0,
            maxAmount: 10,
        }
    ]

    static async getList(userId: string): Promise<DisplayCartItem[]> {
        let productIdList = this._data[userId].map(v => (v.productId))
        // let productList = await xxx(productIdList)
        let productList = this.pList

        return productList.map(v => {
            let data: CartItem = this._data[userId].find(v1 => (v1.productId === v.productId))!
            return ({
                ...data,
                name: v.name || "",
                imageUrl: v.imageUrl || "",
                price: v.price || 0,
                freight: v.freight || 0,
                maxAmount: v.maxAmount || 10,
            })
        })
    }

    /** 往购物车中增加商品 */
    static async add(userId: string, items: CartItem[]): Promise<void> {
        this._data[userId].push(...items)
    }

    /** 下单 */
    static async placeOrder(userId: string): Promise<{ orderId: string }> {
        let productList = this._data[userId].filter(v => v.isSelected === true)
        //生成订单 获取订单id
        let orderId: string = (await OrderUtil.add(userId, productList)).orderId
        this._data[userId] = this._data[userId].filter(v => v.isSelected !== true)
        return { orderId: orderId }
    }

    /** 直接购买 */
    static async buy(userId: string, items: CartItem[]): Promise<{ orderId: string }> {
        //生成订单 获取订单id
        let orderId: string = (await OrderUtil.add(userId, items)).orderId
        return { orderId: orderId }
    }

}
