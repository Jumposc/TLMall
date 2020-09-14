import React from 'react';
import './LoginView.less';

export interface MobileLoginProps {

}

export interface MobileLoginState {

}

export default class MobileLogin extends React.Component<MobileLoginProps, MobileLoginState>{
    state = {

    }

    render() {
        return (
            <div className='MobileLogin'>
                <div className="mobile">
                    <input className="mobileInput" type="text" placeholder="请输入手机号" />
                </div>
                <div className="line1" ></div>
                <div className="code">
                    <input className="codeInput" type="password" placeholder="请输入验证码" />
                    <div className="getCodeBtn">获取验证码</div>
                </div>
                <div className="line2" ></div>
            </div>
        )
    }
}