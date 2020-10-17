import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductCommentItem, ProductData } from './Product';

export interface ReqGetProductCommentList extends BaseReq{
    productId:string
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetProductCommentList extends BaseRes{
    list:ProductCommentItem[]
}