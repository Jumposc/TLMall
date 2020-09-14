import React from 'react';
import './DiscoverView.less';
import JlView from './JlView';
import JpsdView from './JpsdView';
import SpView from './SpView';

export interface DiscoverViewProps {
}

export interface DiscoverViewState {
    currentTabIndex: number;
}

export default class DiscoverView extends React.Component<DiscoverViewProps, DiscoverViewState>{
    state = {
        currentTabIndex: 0
    }

    render() {
        return (
            <div className='DiscoverView'>
                <header>
                    <div className={this.state.currentTabIndex === 0 ? "jpsd_" : 'jpsd'}
                        onClick={() => { this.setState({ currentTabIndex: 0 }) }}>精品晒单</div>
                    <div className={this.state.currentTabIndex === 1 ? "jl_" : 'jl'}
                        onClick={() => { this.setState({ currentTabIndex: 1 }) }}>交流</div>
                    <div className={this.state.currentTabIndex === 2 ? "sp_" : 'sp'}
                        onClick={() => { this.setState({ currentTabIndex: 2 }) }}>视频</div>
                </header>
                <div>
                    {this.state.currentTabIndex === 0 && <JpsdView />}
                    {this.state.currentTabIndex === 1 && <JlView />}
                    {this.state.currentTabIndex === 2 && <SpView />}
                </div>
            </div>
        )
    }
}