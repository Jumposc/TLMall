import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqGetCategorieList extends BaseReq{

}

export interface ResGetCategorieList extends BaseRes{
    list:{
        id:string,
        name:string,
    }
}