import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqConfirmOrder {
    orderId: string,
}

export interface ResConfirmOrder extends BaseRes {
}