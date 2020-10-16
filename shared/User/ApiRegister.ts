import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqRegister{
    username:string,
    password:string,
}

export interface ResRegister extends BaseRes{
}