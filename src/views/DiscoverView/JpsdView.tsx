import React from 'react';
import './DiscoverView.less';
import { JpsdList } from './DiscoverDb'

export interface jpsdViewProps {
}

export interface jpsdViewState {
    jpsdList: JpsdList[]
}

export default class jpsdView extends React.Component<jpsdViewProps, jpsdViewState>{
    state = {
        jpsdList: [
            {
                picture: 'picture1.png',
                content: 'aaaaaaaaaaaaaaaa',
                nickName: '大王',
                avatar: 'dawang.png',
                province: '广东',
                userId: 'DW',
            },
            {
                picture: 'picture2.png',
                content: 'bbbbbbbbbbbbbbbb',
                nickName: '小王',
                avatar: 'xiaowang.png',
                province: '北京',
                userId: 'XW',
            },
            {
                picture: 'picture3.png',
                content: 'cccccccccccccccc',
                nickName: '中王',
                avatar: 'zhongwang.png',
                province: '上海',
                userId: 'ZW',
            },
        ]
    }

    render() {
        return (
            <div className='jpsdView'>
                <section>
                    {this.state.jpsdList.map((v, i) => {
                        return (
                            <div className="jpsd-card" key={i}>
                                <img src={require(`./assets/${v.picture}`)} />
                                <p className="content">{v.content}</p>
                                <div className="user" key={i}>
                                    <img className="avatar" src={require(`./assets/${v.avatar}`)} />
                                    <div className="nickName">{v.nickName}</div>
                                    <div className="province">{v.province}</div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        )
    }
}