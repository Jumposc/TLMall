import React from 'react';
import './LoginView.less';
import MobileLogin from './MobileLogin';
import CipherLogin from './CipherLogin';
import { Global } from '../../models/Global';

export interface LoginViewProps {

}

export interface LoginViewState {
    currentTabIndex: number;
}

export default class LoginView extends React.Component<LoginViewProps, LoginViewState>{
    state = {
        currentTabIndex: 0
    }

    render() {
        return (
            <div className='LoginView'>
                <header>
                    <img className="close" src={require('./assets/close_btn.png')} />
                    <img className="logo" src={require('./assets/jiangxin_logo.png')} />
                    <p>极具匠心 传承经典</p>
                </header>
                <section>
                    <div className="Login-method">
                        <p className={this.state.currentTabIndex === 0 ? "mobileBtn_" : 'mobileBtn'}
                            onClick={() => { this._onMobileClick() }}>手机号登录</p>
                        <p className={this.state.currentTabIndex === 1 ? "cipherBtn_" : 'cipherBtn'}
                            onClick={() => { this._onCipherClick() }}>密码登录</p>
                    </div>
                    <div className="input">
                        {this.state.currentTabIndex === 0 && <MobileLogin />}
                        {this.state.currentTabIndex === 1 && <CipherLogin />}
                    </div>
                    <button className="loginBtn">登录</button>
                    <p className="p1">未注册手机登录后即自动注册</p>
                    <p className="p2">代表同意手匠用户协议和隐私政策</p>
                </section>
                <footer>
                    <p>其他方式登录</p>
                    <div className="otherLogin">
                        <div className="Micro">
                            <img src={require('./assets/Micro_logo.png')} />
                            <p>微博</p>
                        </div>
                        <div className="QQ">
                            <img src={require('./assets/QQ_logo.png')} />
                            <p>微信</p>
                        </div>
                        <div className="Wechat">
                            <img src={require('./assets/Wechat_logo.png')} />
                            <p>QQ</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
    private _onMobileClick() {
        this.setState({ currentTabIndex: 0 })
    }
    private _onCipherClick() {
        this.setState({ currentTabIndex: 1 })
    }
    onLoginClick(){

    }
}