import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { ProductCategory } from './Product';

export interface ReqGetCategoryProduct{

}

export interface ResGetCategoryProduct extends BaseRes{
    data:ProductCategory
}