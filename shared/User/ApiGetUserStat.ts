import { UserStat } from '../../src/models/UserUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqGetUserStat extends BaseReq{

}

export interface ResGetUserStat extends BaseRes{
    data:UserStat
}