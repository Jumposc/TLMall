import React from 'react';
import './MineOrderView.less'
import { ShowOrderListView } from './ShowOrderListView';
import { OrderInformData } from './TestData/OrderInformData';
import { Global } from '../../models/Global';
import { OrderListData } from './TestData/OrderInformData';


export interface MineOrderViewProps {

}
export interface MineOrderViewState {
    statusList:string[],
    currenttab:number,
    data:OrderListData,
}

export default class MineOrderView extends React.Component<MineOrderViewProps, MineOrderViewState> {
    state = {
       statusList:['全部','代付款','待收货','待发货','待评价'],
       currenttab:0, //当前订单状态
       data:{
           id:1,
           orderStatus:'',
           orderList:[]
       } 
       
    }
    onTurnBackMineView(){
        Global.history.push("/mine")
    }

    //监听跳转菜单
    onClickChangeTab(i){
        console.log(i);
        this.state.currenttab=i;
        let data=OrderInformData.getInstance().getData();
        let d=data.find(v=>(this.state.currenttab===v.id))
        this.state.data=d;
        this.forceUpdate();
    }

    //获取数据
    componentDidMount() {
        console.log('111');
        let data=OrderInformData.getInstance().getData();
        let showData=data.find(v=>(this.state.currenttab===v.id));
        this.state.data=showData;
        this.forceUpdate();
    }

    render() {
        return (
        <div className="MineAllOrderView">
            <header>
                <div></div>
                <div className="top">
                    <div className="back_MinewView"  onClick={() => {this.onTurnBackMineView()}}><img src={require("./assets/back_MineView.png")}/></div>
                    <div className="title"><h2>我的订单</h2></div>
                    <div className="search"><img src={require("./assets/search_List.png")}/></div>
                </div>
            </header>
            <section>
                <div className="order_Nav">
                    <ul>
                    {this.state.statusList.map((v,i)=>{
                        return(
                            <li className= "active" key={i}>
                                <div className={this.state.currenttab===i?"tab-nameActive":"tab-name"}
                                onClick={()=>{this.onClickChangeTab(i)}}>
                                {v}
                                </div>
                            </li>
                        )
                    })}
                        
                    </ul>
                </div>
                {this.state.data.orderList.map((v,i)=>{
                    return(
                    console.log(2222),
                    <div className="orderBlock"  key={i}>
                        <ShowOrderListView data={v}/>
                    </div>
                    )
                })}
            </section>
            <footer></footer>
        </div>
        )
    }
    
}