import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqCancelOrder {
    orderId: string,
}

export interface ResCancelOrder extends BaseRes {
}