import React from 'react';
import './DiscoverView.less';
import { SpList } from './DiscoverDb'
import { FollowList } from './DiscoverDb'

export interface SpViewProps {
}

export interface SpViewState {
    followList: FollowList[],
    spList: SpList[],
}

export default class SpView extends React.Component<SpViewProps, SpViewState>{
    state:SpViewState = {
        followList: [
            { nickName: '大王', avatar: 'dawang.png', userId: 'DW' },
            { nickName: '小王', avatar: 'xiaowang.png', userId: 'XW' },
            { nickName: '中王', avatar: 'zhongwang.png', userId: 'ZW' },
        ],
        spList: [
            {
                nickName: '大王',
                avatar: 'dawang.png',
                id: 'DW',
                picture: 'picture7.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 777,
            },
            {
                nickName: '小王',
                avatar: 'xiaowang.png',
                id: 'XW',
                picture: 'picture8.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 888,
            },
        ],
    }
    render() {
        return (
            <div className='jlView'>
                <section>
                    <p>关注的人</p>
                    <ul className="user">
                        {this.state.followList.map((v, i) => {
                            return (
                                <li key={i}>
                                    <img src={require(`./assets/${v.avatar}`)} />
                                    <p>{v.nickName}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="jl-card">
                        {this.state.spList.map((v, i) => {
                            return (
                                <li key={i}>
                                    <div className="head">
                                        <img src={require(`./assets/${v.avatar}`)} />
                                        <div className="status">
                                            <p className="userName">{v.nickName}</p>
                                            <p className="from">1分钟前 来自 iphone</p>
                                        </div>
                                        <div className={v.isFollow === true ? "isFollow" : "follow"}
                                            onClick={() => { this.modifyFollow(v.id) }}>
                                            {v.isFollow === false ? '+关注' : '已关注'}
                                        </div>
                                    </div>
                                    <p className="content">{v.content}</p>
                                    <img className="uimg" src={require(`./assets/${v.picture}`)} />
                                    <div className="footer">
                                        <div className="like" onClick={() => { this.onLikeBtn(v) }}>
                                            {
                                                v.isLike === false ?
                                                    <img src={require(`./assets/like_icon.png`)} /> :
                                                    <img src={require(`./assets/like2_icon.png`)} />
                                            }
                                            <p>{v.like}</p>
                                        </div>
                                        <div className="comment">
                                            <img src={require('./assets/comment_icon.png')} />
                                            <p>568</p>
                                        </div>
                                        <div className="forward" >
                                            <img src={require('./assets/forward_icon.png')} />
                                            <p>转发</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        )
    }
    onLikeBtn(v: SpList) {
        if (v.isLike === false) {
            v.like += 1;
            v.isLike = !v.isLike;
        }
        else {
            v.like -= 1;
            v.isLike = !v.isLike
        };
        this.forceUpdate()
    }
    modifyFollow(id: string) {
        this.state.spList.filter(v => v.id === id)
            .forEach(v => { v.isFollow = !v.isFollow });
        this.forceUpdate()
    }
}