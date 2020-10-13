import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqLogin extends BaseReq{
    username:string,
    password:string,
}

export interface ResLogin extends BaseRes{
    token:string
}