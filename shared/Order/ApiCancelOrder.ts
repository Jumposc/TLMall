import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqCancelOrder extends BaseReq{
    orderId: string,
}

export interface ResCancelOrder extends BaseRes {
}