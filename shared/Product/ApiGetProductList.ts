import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from './Product';

export interface ReqGetProductList extends BaseReq{
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetProductList extends BaseRes{
    list:ProductData[]
}