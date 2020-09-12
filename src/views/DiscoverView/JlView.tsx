import React from 'react';
import './DiscoverView.less';

export interface JlViewProps {
}

export interface JlViewState {
    user: {
        nickName: string,
        avatar: string,
        id: string,
    }[],
    jlCard: {
        picture: string,
        content: string,
        nickName: string,
        avatar: string,
        isFollow: boolean,
        like: number,
        isLike: boolean,
    }[],


}

export default class JlView extends React.Component<JlViewProps, JlViewState>{
    state = {
        user: [
            { nickName: '大王', avatar: 'dawang.png', id: 'DW' },
            { nickName: '小王', avatar: 'xiaowang.png', id: 'XW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
            { nickName: '中王', avatar: 'zhongwang.png', id: 'ZW' },
        ],
        jlCard: [
            {
                nickName: '大王',
                avatar: 'dawang.png',
                id: 'DW',
                picture: 'picture4.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 777,
            },
            {
                nickName: '中王',
                avatar: 'zhongwang.png',
                id: 'ZW',
                picture: 'picture5.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 788,
            },
            {
                nickName: '小王',
                avatar: 'xiaowang.png',
                id: 'XW',
                picture: 'picture6.png',
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
                        {this.state.user.map((v, i) => {
                            return (
                                <li key={i}>
                                    <img src={require(`./assets/${v.avatar}`)} />
                                    <p>{v.nickName}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="jl-card">
                        {this.state.jlCard.map((v, i) => {
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

    onLikeBtn(v) {
        // v.isLike === false ? v.like +=1 : v.like -=1 ;
        // v.isLike = !v.isLike;
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
    modifyFollow(id) {
        this.state.jlCard.filter(v => v.id === id)
            .forEach(v => { v.isFollow = !v.isFollow });
        this.forceUpdate()
    }
}