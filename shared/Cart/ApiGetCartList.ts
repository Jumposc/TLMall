import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from '../Product/Product';

export interface ReqGetCartList extends BaseReq{
}

export interface ResGetCartList extends BaseRes {
    list:
    {
        product: ProductData,
        amount: number,
        spec: string
    }[]

}