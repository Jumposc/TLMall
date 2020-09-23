import { OrderUtil } from './OrderUtil'
import { ProductUtil, ProductData } from './ProductUtil'

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

// 购物车
export class CartUtil {
    static _data: { [userId: string]: CartItem[] } = {
        '11111': [
            {
                id: "11",
                amount: 5,
                spec: "绿色",
                isSelected: true,
            }
        ],
    }

    static async getList(userId: string): Promise<DisplayCartItem[]> {
        //分离出productIdList
        let productIdList = this._data[userId].map(v => (v.id))
        let products: (ProductData | undefined)[] = await ProductUtil.getProducts(productIdList)
        // 去除数组中的undefined
        let productList: ProductData[] = products.filter(v => v !== undefined) as ProductData[]
        return productList.map(v => {
            let data: CartItem = this._data[userId].find(v1 => (v1.id === v.id))!
            return ({
                ...data,
                name: v.name || "",
                imageUrl: v.imageUrl || "",
                price: v.detail.price || 0,
                freight: v.detail.freight || 0,
                maxAmount: v.detail.maxAmount || 10,
            })
        })
    }

    /** 往购物车中增加商品 */
    static async add(userId: string, items: CartItem[]): Promise<void> {
        if (this._data[userId] === undefined) {
            this._data[userId] = items
        }
        else {
            this._data[userId].push(...items)
        }
    }

    /** 下单 */
    static async placeOrder(userId: string): Promise<{ orderId: string }> {
        let productList = this._data[userId].filter(v => v.isSelected === true)

        //生成订单 获取订单id
        let orderId: string = (await OrderUtil.add(userId, productList)).orderId

        // 列表中去除已下单的商品
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
