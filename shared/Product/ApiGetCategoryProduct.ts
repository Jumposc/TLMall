import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductCategory } from './Product';

export interface ReqGetCategoryProduct extends BaseReq{

}

export interface ResGetCategoryProduct extends BaseRes{
    data:ProductCategory
}