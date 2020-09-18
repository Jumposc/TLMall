import React from 'react';
import './MineOrderView.less'
import { GoodsListItemData } from './TestData/OrderInformData';


export interface ShowOrderListViewProps {
    data: GoodsListItemData,

}
export interface ShowOrderListViewState {

}

export class ShowOrderListView extends React.Component<ShowOrderListViewProps> {
    render() {
        return (
            <div className="orderList">
                <div className="sallerInform">
                    <div className="sallerImg">
                        <img src={require(`./assets/${this.props.data.sellerImg}`)}/>
                    </div>
                    <div className="sallerName">
                        {this.props.data.sellerName}
                    </div>
                    <div className="sallerDetail">
                        <img src={require('./assets/sallerDetail.png')}/>
                    </div>
                    <div className="business_State">
                        {this.props.data.businessStatus}
                    </div>
                </div>
                <div className="goods_Inform">
                    <div className="goods_Img">
                        <img src={require(`./assets/${this.props.data.goodsImg}`)}/>
                    </div>
                    <div className="goods_Detail">
                        <div className="goods_Name">{this.props.data.goodsName}</div>
                        <div className="goods_Status">
                            <div className="goods_Stylechoice">{this.props.data.goodsStyleChoice}</div>
                            <div className="goods_Number">x{this.props.data.goodsNum}</div>
                        </div>
                        <div className="goods_Service">七天包退换</div>
                    </div>
                </div>
                <div className="goods_AccountItem">{this.props.data.goodsAccountItem}
                    <span>￥{this.props.data.goodsAllAccount}</span></div>
                <div className="goods_OperateButton">
                        <div className="del_GoodsItem">
                            <button onClick={()=>this.onDelBtn()}>删除订单</button>
                        </div>
                        <div className="Appraise_GoodsItem">
                            <button >评价商品</button>
                        </div>
                </div>
            </div>
        )
    }

    onDelBtn()
    {
        confirm("删除之后可以从电脑端订单回收站中恢复")
    }
}