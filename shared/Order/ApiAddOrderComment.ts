import { OrderItem } from '../../src/models/OrderUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqAddOrderComment extends BaseReq {
    content:string,
    images:string
}

export interface ResAddOrderComment extends BaseRes {
    data:OrderItem
}