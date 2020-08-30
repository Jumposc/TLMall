import React from "react";
import "./Tab.less";
import { Global } from '../../models/Global';

export interface TabProps { }

export interface TabState {
    selectedIndex: number;
    icontList: {
        img: string;
        imgSelected: string;
        name: string;
        path: string;
    }[];
}

export class Tab extends React.Component<TabProps, TabState> {
    state: TabState = {
        selectedIndex: -1,  //-1不显示，0~n为index
        icontList: [
            {
                img: ("/src/components/Tab/assets/home.png"),
                imgSelected: ("/src/components/Tab/assets/home_sel.png"),
                name: "主页",
                path: 'home'
            },
            {
                img: ("/src/components/Tab/assets/category.png"),
                imgSelected: ("/src/components/Tab/assets/category_sel.png"),
                name: "分类",
                path: 'category'
            },
            {
                img: ("/src/components/Tab/assets/discover.png"),
                imgSelected: ("/src/components/Tab/assets/discover_sel.png"),
                name: "发现",
                path: 'discover'
            },
            {
                img: ("/src/components/Tab/assets/cart.png"),
                imgSelected: ("/src/components/Tab/assets/cart_sel.png"),
                name: "购物车",
                path: 'cart'
            },
            {
                img: ("/src/components/Tab/assets/user.png"),
                imgSelected: ("/src/components/Tab/assets/user_sel.png"),
                name: "我的",
                path: 'mine'
            },
        ],
    };

    componentDidMount() {
        this.getPathIndex()
        Global.history.listen(() => {
            this.getPathIndex()
        })
    }

    getPathIndex() {
        // let path = Global.history.location.pathname.split('/')[1]
        let path = Global.history.location.pathname.replace('/', '')
        this.state.selectedIndex = this.state.icontList.findIndex((v) => (v.path === path))
        this.forceUpdate()

    }

    render() {
        return (
            <div className="Tab" style={{ display: this.state.selectedIndex === -1 ? 'none' : '' }}>
                {this.state.icontList.map((v, i) => (
                    <div key={i}
                        onClick={() => {
                            Global.history.push('/' + this.state.icontList[i].path)
                        }}
                    >
                        <div className="img">
                            {this.state.selectedIndex === i ? (
                                <img src={v.imgSelected} alt="" />
                            ) : (
                                    <img src={v.img} alt="" />
                                )}
                        </div>
                        <div className="name">{v.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}
