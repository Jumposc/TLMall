import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from './Product';

export interface ReqGetProductCommentList{
    productId:string
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetProductCommentList extends BaseRes{
    list:ProductData[]
}