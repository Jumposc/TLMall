import React from 'react';
import './MineView.less';
import {UserInformData,UserData  } from './TestData/UserInformData';
import { Global } from '../../models/Global';
import {getNum} from '../../models/NumUtil'

export interface MineViewProps {
   
}

export interface MineViewState {
    data:UserData[],
    showCoupon:boolean,
}

export default class MineView extends React.Component<MineViewProps, MineViewState>{
    state = {
            data:[],
            showCoupon:true,
    };

    onReplaceOrder(){
        Global.history.push("/mineorder");
    }

    //获取数据
    componentDidMount() {
        let getData = UserInformData.getInstance().getUserData();
        this.state.data=getData;
        this.forceUpdate();
    }

    
     //获取优惠券并判断显示
    getCouponNum() {
        let couponNum;
        couponNum = this.state.data.map((v) => {
            if (v.userCoupon<1) {
                this.state.showCoupon===false;
                return
            }
            else{
                this.state.showCoupon===true;
                return v.userCoupon;
            }
        });
        return couponNum;
    }

    //获取粉丝数量
    getFansNum() {
        let fansNum;
        fansNum = this.state.data.map((v) => {
            getNum(v);
        });
        return fansNum;
    }

    //获取关注数量
    getFollowNum() {
        let followNum;
        followNum = this.state.data.map((v) => {
            getNum(v);
        });
        return followNum;
    }

    //获取关注数量
    getLikesNum() {
        let likesNum;
        likesNum = this.state.data.map((v) => {
            getNum(v);
        });
        return likesNum;
    }

    //获取收藏数量
    getCollectNum() {
        let collectNum;
        collectNum = this.state.data.map((v) => {
            getNum(v);
        });
        return collectNum;
    }

    render() {
        return (
            <div className="MineView">
                <header>
                    <div className="user_Background">
                        <img src={require('./assets/user_background.png')}/>
                    </div>
                </header>
                <section>
                    <div className="user_Block">
                        <div className="user_Vip">
                            <img src={require('./assets/user_Vip.png')}/>
                        </div>
                        <div className="user_Part" >
                        {this.state.data.map((v,i)=>{
                            return(
                                <div className="user_Inform"key={i}>
                                    <div className="user_Avatar">
                                    <img src={require(`./assets/${v.userAvatar}`)}/>
                                    </div>
                                    <div className="user_nickName">
                                        <h2>
                                        {v.usernickName}
                                        </h2>
                                        <div className="user_Medal">
                                            {v.userMedal}
                                        </div>
                                    </div>
                                </div>
                                )
                                })}
                            <div className="user_funcPart">
                                <ul>
                                    <li>
                                        <div className="user_Fans" >{this.getFansNum()}</div>
                                        <p>粉丝</p>
                                    </li>
                                    <li>
                                        <div className="user_Follow">{this.getFollowNum()}</div>
                                        <p>关注</p>
                                    </li>
                                    <li>
                                        <div className="user_Likes" >{this.getLikesNum()}</div>
                                        <p>点赞</p>
                                    </li>
                                    <li>
                                        <div className="user_Collection">{this.getCollectNum()}</div>
                                        <p>收藏</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order_Part">
                            <div className="MyOrder" >
                                <h2>我的购物车</h2>
                                <div className="MyAllOrder"  
                                onClick={() => {this.onReplaceOrder()}}>
                                <p>全部</p>
                                <img src={require('./assets/enter_button.png')}/>
                                </div>
                            </div>
                            <div className="order_Function">
                                <ul>
                                    <li>
                                        <div className="order_loadPay">
                                            <img src={require('./assets/loadPay.png')}/>
                                        </div>
                                        <p>代付款</p>
                                    </li>
                                    <li>
                                        <div className="order_loadDeliver">
                                            <img src={require('./assets/loadDeliver.png')}/>
                                        </div>
                                        <p>待发货</p>
                                    </li>
                                    <li>
                                        <div className="order_loadRecept">
                                            <img src={require('./assets/loadRecept.png')}/>
                                        </div>
                                        <p>待收货</p>
                                    </li>
                                    <li>
                                        <div className="order_showList">
                                            <img src={require('./assets/showList.png')}/>
                                        </div>
                                        <p>晒单</p>
                                    </li>
                                    <li>
                                        <div className="order_Refuse">
                                            <img src={require('./assets/Refuse.png')}/>
                                        </div>
                                        <p>退款/售后</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="orther_Part">
                            <div className="my_Coupon">
                                <h2>我的优惠券</h2>
                                <div className={this.state.showCoupon==true?"showCoupon":'showCouponhide'} >
                                    {this.getCouponNum()}
                                </div>
                                <img src={require('./assets/enter_button2.png')}/>
                            </div>
                            <div className="box_BorderButtom"></div>
                            <div className="member_Center">
                                <h2>会员中心</h2>
                                <p>马上开通领福利</p>
                                <img src={require('./assets/enter_button2.png')}/>
                            </div>
                            <div className="box_BorderButtom"></div>
                            <div className="online_Service">
                                <h2>在线客服</h2>
                                <img src={require('./assets/enter_button2.png')}/>
                            </div>
                            <div className="my_apply">
                                <h2>申请成为手艺人</h2>
                                <img src={require('./assets/enter_button2.png')}/>
                            </div>
                            <div className="my_Suggest">
                                <h2>意见与反馈</h2>
                                <img src={require('./assets/enter_button2.png')}/>
                            </div>
                        </div>
                    </div>
                </section>
                <footer></footer>
            </div>
        )
    }
}