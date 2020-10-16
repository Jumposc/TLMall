import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { DiscoverContentItem } from './Discover';

export interface ReqGetDiscoverContentList{
    category:"交流" | "精品晒单"
}

export interface ResGetDiscoverContentList extends BaseRes{
    list:DiscoverContentItem[]
}