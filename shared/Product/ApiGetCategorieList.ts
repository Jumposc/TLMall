import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqGetCategorieList{

}

export interface ResGetCategorieList extends BaseRes{
    list:{
        id:string,
        name:string,
    }[]
}