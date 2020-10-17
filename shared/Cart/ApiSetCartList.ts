import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from '../product/Product';

export interface ReqSetCartList extends BaseReq{
    products:
    {
        id: string,
        spec: string,
        amount: number
    }[]

}

export interface ResSetCartList extends BaseRes {
    list:
    {
        product: ProductData,
        amount: number,
        spec: string
    }[]

}