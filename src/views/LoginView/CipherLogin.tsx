import React from 'react';
import './LoginView.less';

export interface CipherLoginProps {
    onChangeInput:Function
}

export interface CipherLoginState {
    username:string
    password:string
}

export default class CipherLogin extends React.Component<CipherLoginProps, CipherLoginState>{
    state = {
        username:'',
        password:''
    }

    render() {
        return (
            <div className='CipherLogin'>
                <input className="numInput" type="text" placeholder="请输入账号" value={this.state.username}
                    onChange={(e)=>{this.onChangeInput('username',e.currentTarget.value)}}/>
                <div className="line1"></div>
                <input className="cipherInput" type="password" placeholder="请输入密码" value={this.state.password}
                    onChange={(e)=>{this.onChangeInput('password',e.currentTarget.value)}}/>
                <div className="line2"></div>
            </div>
        )
    }
    onChangeInput(key:'username'|'password',data:string){
        this.state[key] = data
        this.forceUpdate()
        this.props.onChangeInput(key,data)
    }
}