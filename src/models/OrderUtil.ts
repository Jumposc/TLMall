import { CartItem } from './CartUtil'
import { ProductUtil,ProductData} from './ProductUtil'
import { ProductAttributeView } from '../views/ProductDetailView/ProductAttributeView/ProductAttributeView';
import { useRef } from 'react';

export interface OrderItem {
    id: string,
    uid: string,
    status: '待付款' | '待发货' | '待收货' | '待评价' | '已完成' | '交易关闭',
    products: {
        id: string,
        name: string,
        imageUrl: string,
        price: number,
        spec: string,
        amount: number,
        freight: number
    }[],
    price: {
        products: number,
        freight: number,
        discount: number,
        total: number
    },

    createTime: number,
    payedTime?: number
}

// 订单相关
export class OrderUtil {

    /** 下单 */
    static async add(userId: string,productList: CartItem[]): Promise<{ orderId: string }> {
        //根据uid查找用户
        let getUser = orderListData[userId].map(v => (v.id))
        //获取订单id
        let id= 10;
        //调用炫兆接口并获取商品信息
        let productItem: (ProductData | undefined)[] = await ProductUtil.getProducts(getUser);
        let productAllData: ProductData[] = productItem.filter(v => v !== undefined) as ProductData[];
        if(orderListData[userId]===undefined)
        {
            console.log("用户不存在");
            return {
                orderId: "",
            }
        }
        if (getUser) {
            let productData = productAllData.map((v) => ({
                id:v.id,
                name:v.name,
                imageUrl:v.imageUrl,
                price: v.detail.price, //价格
                spec:productList.find(v1=>v1.id===v.id)!.spec,//规格
                amount: productList.find(v1=>v1.id===v.id)!.amount,//金额
                freight:v.detail.freight,
                }
            ))
            let createOrder: OrderItem = {
                id: (++id).toString(),
                uid: userId,
                status:"待付款",
                products: productData,
                price: {
                    products:productData.reduce((total, v) => (total += v.price * v.amount), 0),
                    freight:productData.reduce((total, v) => (total += v.freight), 0),
                    discount: 0,
                    total:0,
                },
                createTime:0 //时间戳
            }
            createOrder.price.total = createOrder.price.products + createOrder.price.freight - createOrder.price.discount
            orderListData[userId].push(createOrder);
        }    
        return {
            orderId: id.toString(),
        }
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
    static async getOrderList(orderStatus: OrderItem['status'] | '全部', size: number, uid: string, lastItemId?: string): Promise<OrderItem[]> {
        //根据商品状态和uid查出分类里的商品列表
        let getOrder: OrderItem[] = orderListData[uid].filter((v) =>orderStatus===v.status);
        if (getOrder) {
            getOrder.map(v => {
                return ({
                    id: v.id,
                    uid: v.uid,
                    status: v.status,
                    products: v.products,
                    price: v.price,
                    createTime: v.createTime,
                    payedTime:v.payedTime,
                })
            })
        }
        return getOrder
    }
}

let orderListData :{[uid:string]:OrderItem[]} = 
    {
        "132":[
            {
                id: "1",
                uid: "132",
                status:"待付款",
                products: [
                    {
                        id:"1",
                        name:"莫源|独立设计.鼻烟壶套装加送盒子",
                        imageUrl:"3",
                        price: 2300, //价格
                        spec:"绿色",//规格
                        amount: 2300,//金额
                        freight:0,
                        
                    }
                ],
                price: {
                    products: 2300,
                    freight: 0, //邮费
                    discount: 100, //优惠
                    total: 2200, //总体
                },
                createTime: 2020-09-18,
                payedTime: 2020-09-18,
            },
            {
                id: "2",
                uid: "132",
                status:"待收货",
                products: [
                    {
                        id:"1",
                        name:"莫源|独立设计.鼻烟壶套装加送盒子",
                        imageUrl:"3",
                        price: 2300, //价格
                        spec:"蓝绿色",//规格
                        amount: 2300,//金额
                        freight:0,
                    }
                ],
                price: {
                    products: 2300,
                    freight: 10,
                    discount: 100,
                    total: 2200
                },
                createTime: 2020-09-18,
                payedTime: 2020-09-18,
            },
        ],
        "133":[
            {
                id: "1",
                uid: "133",
                status:"待付款",
                products: [
                    {
                        id:"1",
                        name:"莫源|独立设计.鼻烟壶套装加送盒子",
                        imageUrl:"3",
                        price: 2300, //价格
                        spec:"蓝绿色",//规格
                        amount: 2300,//金额
                        freight:0,
                        
                    }
                ],
                price: {
                    products: 2300,
                    freight: 10, //邮费
                    discount: 100, //优惠
                    total: 2200, //总体
                },
                createTime: 2020-09-18,
                payedTime: 2020-09-18,
            },
            {
                id: "2",
                uid: "133",
                status:"待收货",
                products: [
                    {
                        id:"1",
                        name:"莫源|独立设计.鼻烟壶套装加送盒子",
                        imageUrl:"3",
                        price: 2300, //价格
                        spec:"蓝绿色",//规格
                        amount: 2300,//金额
                        freight:0,
                        
                    }
                ],
                price: {
                    products: 2300,
                    freight: 10,
                    discount: 100,
                    total: 2200
                },
                createTime: 2020-09-18,
                payedTime: 2020-09-18,
            },
        ]
    }


  



