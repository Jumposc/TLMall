import React from 'react';
import './MineAllOrderView.less'
import { ShowOrderListView } from './ShowOrderListView';
import { OrderInformData } from './TestData/OrderInformData';
import { Global } from '../../models/Global';
export interface OrderListData {
    id:number
    statusName:string
    goodsList: {      
        name: string     
        goodsData:GoodsListItemData[]
    }[]
}
export interface GoodsListItemData {
    id:number
    busniessTargetImg:string,
    busniessTargetName:string,
    busniessTargetStatus:string,
    goodsName:string,
    goodsImg:string,
    goodsStyleChoice:string,
    goodsNum:number,
    goodsAccountItem:string,
    goodsAllAccount:string,
}

export interface MineAllOrderViewProps {
    
}
export interface MineAllOrderViewState {
    orderStatuslist: string[] 
    currentIndex:number
    data: OrderListData
}

export default class MineAllOrderView extends React.Component<MineAllOrderViewProps, MineAllOrderViewState> {
    state = {
        orderStatuslist:[],
        currentIndex:0,
        data: {
            id:0,
            statusName:"",
            goodsList: [
                {
                    name:"",
                    goodsData:[],    
                }
            ]
        }
    }

    componentDidMount() {
        let data = OrderInformData.getInstance().getDataByStatusList();
        this.setState({
            orderStatuslist:data.orderStatuslist,
            data: data.data
        })
    }
    onTurnBackMineView(){
        Global.history.push("/MineView")
    }

    render() {
        return (
            <div className="MineAllOrderView">
            <header>
                <div></div>
                <div className="top">
                    <div className="back_MinewView"  onClick={() => {this.onTurnBackMineView()}}>
                        <img src={require("./assets/backMineView.png")}/>
                    </div>
                    <div className="title"><h2>我的订单</h2></div>
                    <div className="search"><img src={require("./assets/search_List.png")}/></div>
                </div>
            </header>
            <section>
                <div className="order_Nav">
                    <ul>
                        {this.state.orderStatuslist.map((v,i)=>{
                        return(
                            <li className={this.state.currentIndex===i? "active":'' } key={i} onClick={()=>{this.onClickChangeTab(i)}}>
                            <div className="tab-Name">
                                {v}
                            </div>
                            </li>
                        )
                        })}
                    </ul>
                </div>
                {this.state.data.goodsList.map((v,i)=>{
                    return( 
                      <div className="orderBlock" {...v.name} key={i}>
                          {v.goodsData.map((v,i)=>{
                              return <ShowOrderListView data={v} key={i}/>
                          })}
                      </div>
                    ) 
                })}
            </section>
            <footer></footer>
        </div>
        )
    }
    onClickChangeTab(i){
        let data=OrderInformData.getInstance().getDataByName(this.state.orderStatuslist[i])
        this.setState({
            orderStatuslist:data.orderStatuslist,
            data:data.data,
            currentIndex:i,    
        })
    }

}