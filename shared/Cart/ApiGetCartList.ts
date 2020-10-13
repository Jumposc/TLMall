import { ProductData } from '../../src/models/ProductUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqGetCartList extends BaseReq{
}

export interface ResGetCartList extends BaseRes{
    list:[
        {
            product:ProductData,
            amount:number,
            spec:string
        }
    ]
}