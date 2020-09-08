import React from 'react';
import './MineView.less';
import { Global } from '../../models/Global';

export interface MineViewProps {
   
}

export interface MineViewState {
    userData: {
        nickName:string,
        user_Avatar:string,
        user_Medal:string,
        user_Fans:number,
        user_Follows:string,
        user_Likes:string,
        user_Collection:number,
    }[];

}

export default class MineView extends React.Component<MineViewProps, MineViewState>{

    state: MineViewState = {
        userData:[
            {
            nickName:"别样风格",
            user_Avatar:require("./assets/avatar.png"),
            user_Medal:"寻宝人",
            user_Fans:156,
            user_Follows:"1.1K",
            user_Likes:"2.3W",
            user_Collection:45,
            }
        ],
    };

    onCheckAllOrder(){

        Global.history.push("/mineorder");
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
                        {this.state.userData.map((v)=>(
                        <div className="user_Part">
                            <div className="user_Inform">
                                <div className="user_Avatar">
                                    <img src={v.user_Avatar}/>
                                </div>
                                <div className="nickName">
                                    <h2>{v.nickName}</h2>
                                    <div className="user_Medal">
                                        <img src={require('./assets/otheravatar.png')}/>
                                        <p>{v.user_Medal}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="user_funcPart">
                                <ul>
                                    <li>
                                        <div className="user_Fans">{v.user_Fans}</div>
                                        <p>粉丝</p>
                                    </li>
                                    <li>
                                        <div className="user_Follow">{v.user_Follows}</div>
                                        <p>关注</p>
                                    </li>
                                    <li>
                                        <div className="user_Likes">{v.user_Likes}</div>
                                        <p>点赞</p>
                                    </li>
                                    <li>
                                        <div className="user_Collection">{v.user_Collection}</div>
                                        <p>收藏</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        ))}
                        <div className="order_Part">
                            <div className="MyOrder" >
                                <h2>我的购物车</h2>
                                <div className="MyAllOrder"  
                                onClick={() => {this.onCheckAllOrder()}}>
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
                                <p>5</p>
                                <img src={require('./assets/sign_Number.png')} className="sign_Number"/>
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