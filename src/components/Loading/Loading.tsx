import React from 'react';
import './Loading.less';
import { Global } from "../../models/Global";

export interface LoadingProps {

}

export interface LoadingState {

}

export default class Loading extends React.Component<LoadingProps, LoadingState>{
    showNum = 0;

    componentDidMount() {
        Global.loading = this;
    }

    showLoading() {
        this.showNum++;
        this.forceUpdate();
    }

    hideLoading() {
        this.showNum--;
        this.forceUpdate();
    }

    render() {
        return <div className='Loading'
            style={{ display: this.showNum <= 0 ? 'none' : '' }}
        >加载中...</div>;
    }
}