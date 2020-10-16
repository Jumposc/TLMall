import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from './Product';

export interface ReqGetProductOne{
    productId:string
}

export interface ResGetProductOne extends BaseRes{
    data:ProductData
}