import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqRegister extends BaseReq{
    username:string,
    password:string,
}

export interface ResRegister extends BaseRes{
}