import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from './Product';

export interface ReqGetProductOne extends BaseReq{
    productId:string
}

export interface ResGetProductOne extends BaseRes{
    data:ProductData
}