import { OrderItem } from '../../src/models/OrderUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqPayOrder {
    orderId: string,
}

export interface ResPayOrder extends BaseRes {
}