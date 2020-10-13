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