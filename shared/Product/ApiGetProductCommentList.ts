import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from './Product';

export interface ReqGetProductCommentList extends BaseReq{
    page:number,
    pageSize:number,
    lastId?:string
}

export interface ResGetProductCommentList extends BaseRes{
    list:ProductData[]
}