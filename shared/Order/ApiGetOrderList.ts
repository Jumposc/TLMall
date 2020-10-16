import { OrderItem } from '../../src/models/OrderUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqGetOrderList {
    status:OrderItem['status'] | "全部",
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetOrderList extends BaseRes {
    list:OrderItem[]
}