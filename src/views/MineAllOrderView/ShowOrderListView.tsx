import React from 'react';
import { GoodsListItemData } from './MineAllOrderView';


export interface ShowOrderListViewProps {
    data: GoodsListItemData
}
export interface ShowOrderListViewState {
    

}

export class ShowOrderListView extends React.Component<ShowOrderListViewProps> {
    render() {
        return (
            <div className="orderList">
            <div className="business_TargetInform">
                <div className="target_Img">
                    <img src={require(`./assets/${this.props.data.busniessTargetImg}`)} alt=''/>
                </div>
                <div className="target_Name">
                    {this.props.data.busniessTargetName}
                </div>
                <div className="target_Detail">
                    <img src={require('./assets/targetDetail.png')}/>
                </div>
                <div className="business_State">
                {this.props.data.busniessTargetStatus}
                </div>
            </div>
            <div className="goods_Inform">
                <div className="goods_Img">
                    <img src={require(`./assets/${this.props.data.goodsImg}`)} alt=''/>
                </div>
                <div className="goods_Detail">
                    <div className="goods_Name">
                        {this.props.data.goodsName}
                    </div>
                    <div className="goods_Status">
                        <div className="goods_Stylechoice">
                            {this.props.data.goodsStyleChoice}
                        </div>
                        <div className="goods_Number">
                            {this.props.data.goodsNum}
                        </div>
                    </div>
                    <div className="goods_Service">
                        七天包退换
                    </div>
                    <div className="goods_AccountItem">{this.props.data.goodsAccountItem}<span>￥{this.props.data.goodsAllAccount}</span></div>
                </div>
            </div>
            <div className="goods_OperateButton">
                    <div className="del_GoodsItem">
                        <button>删除订单</button>
                    </div>
                    <div className="Appraise_GoodsItem">
                        <button >评价商品</button>
                    </div>
            </div>
            </div>
        )
    }
}