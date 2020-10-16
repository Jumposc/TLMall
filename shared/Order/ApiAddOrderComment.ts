import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { OrderItem } from './Order';

export interface ReqAddOrderComment {
    orderId:string,
    content:string,
    images:string
}

export interface ResAddOrderComment extends BaseRes {
    data:OrderItem
}