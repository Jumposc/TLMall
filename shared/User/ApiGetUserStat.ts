import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { UserStat } from './User';

export interface ReqGetUserStat extends BaseReq{

}

export interface ResGetUserStat extends BaseRes{
    data:UserStat
}