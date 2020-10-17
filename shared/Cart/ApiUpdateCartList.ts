import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from '../product/Product';

export interface ReqUpdateCartList extends BaseReq{
    products:[
        {
            id:string,
            spec:string,
            amount:number
        }
    ]
}

export interface ResUpdateCartList extends BaseRes{
    list:[
        {
            product:ProductData,
            amount:number,
            spec:string
        }
    ]
}