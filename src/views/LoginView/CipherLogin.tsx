import React from 'react';
import './LoginView.less';

export interface CipherLoginProps {
}

export interface CipherLoginState {
}

export default class CipherLogin extends React.Component<CipherLoginProps, CipherLoginState>{
    state = {

    }

    render() {
        return (
            <div className='CipherLogin'>
                <input className="numInput" type="text" placeholder="请输入账号" />
                <div className="line1"></div>
                <input className="cipherInput" type="password" placeholder="请输入密码" />
                <div className="line2"></div>
            </div>
        )
    }
}