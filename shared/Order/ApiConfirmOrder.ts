import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqConfirmOrder extends BaseReq{
    orderId: string,
}

export interface ResConfirmOrder extends BaseRes {
}