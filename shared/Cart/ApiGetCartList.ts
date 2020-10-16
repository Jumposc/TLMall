import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData } from '../Product/Product';

export interface ReqGetCartList {
}

export interface ResGetCartList extends BaseRes {
    list:
    {
        product: ProductData,
        amount: number,
        spec: string
    }[]

}