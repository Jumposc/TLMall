import React from 'react';
import './LoginView.less';

export interface MobileLoginProps {
    onChangeInput:Function
}

export interface MobileLoginState {
    username:string
    password:string

}

export default class MobileLogin extends React.Component<MobileLoginProps, MobileLoginState>{
    state = {
        username:'',
        password:''
    }

    render() {
        return (
            <div className='MobileLogin'>
                <div className="mobile">
                    <input className="mobileInput" type="text" placeholder="请输入手机号" value={this.state.username}
                    onChange={(e)=>{this.onChangeInput('username',e.currentTarget.value)}} />
                </div>
                <div className="line1" ></div>
                <div className="code">
                    <input className="codeInput" type="password" placeholder="请输入验证码" value={this.state.password}
                    onChange={(e)=>{this.onChangeInput('password',e.currentTarget.value)}}/>
                    <div className="getCodeBtn">获取验证码</div>
                </div>
                <div className="line2" ></div>
            </div>
        )
    }
    onChangeInput(key:'username'|'password',data:string){
        this.state[key] = data
        this.forceUpdate()
        this.props.onChangeInput(key,data)
    }
}