import { CartItem } from './CartUtil';

export interface OrderItem {
    id: string,
    uid: string,
    products: {
        id: string,
        name: string,
        imageUrl: string,
        // 单价
        price: number,
        amount: number
    }[],
    status: '待付款' | '待发货' | '待收货' | '待评价' | '已完成' | '交易关闭',
    price: {
        products: number,
        ship: number,
        discount: number,
        total: number
    },

    createTime: number,
    payedTime?: number
}

// 订单相关
export class OrderUtil {

    /** 下单 */
    static async add(userId: string, productList: CartItem[]): Promise<{ orderId: string }> {
        return ({ orderId: '' })
    }

    /** 取消订单（未发货的） */
    static cancel() { }

    /** 支付订单 */
    static pay() { }

    /** 确认收货 */
    static confirm() { }

    /** 发送评价 */
    static comment() { }

    /** 获取指定状态的订单列表 */
    static getOrderList(orderStatus: OrderItem['status'] | '全部', size: number, lastItemId?: number): Promise<OrderItem[]> {
        throw new Error('TODO');
    }

}