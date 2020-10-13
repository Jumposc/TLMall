import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductData, ProductSimpleInfo } from './Product';

export interface ReqGetProductSimpleInfos extends BaseReq{
    productIds:string[]
}

export interface ResGetProductSimpleInfos extends BaseRes{
    list:ProductSimpleInfo[]
}