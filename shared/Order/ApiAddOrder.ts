import { OrderItem } from '../../src/models/OrderUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqAddOrder extends BaseReq {
    products: {
        id: string,
        spec:string,
        amount:number
    }[]
}

export interface ResAddOrder extends BaseRes {
    data:OrderItem
}