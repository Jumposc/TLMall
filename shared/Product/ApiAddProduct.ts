import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductAttributeData, ProductDetail } from './Product';

export interface ReqAddProduct extends BaseReq{
    name: string,
    imageUrl: string,
    detail: ProductDetail,
    attribute: ProductAttributeData
}

export interface ResAddProduct extends BaseRes{
    id:string
}