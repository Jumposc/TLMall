import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { OrderItem } from './Order';

export interface ReqGetOrderList extends BaseReq{
    status:OrderItem['status'] | "全部",
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetOrderList extends BaseRes {
    list:OrderItem[]
}