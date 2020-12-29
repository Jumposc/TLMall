import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.less';

export interface HomeViewProps extends React.Props<any> {

}

export interface HomeViewState {
    productList: {
        id: string,
        name: string,
        imgUrl: string,
        price: number,
        place: string
    }[]
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState>{

    state: HomeViewState = {
        productList: [
            {
                id: '1',
                name: "陈思 | 原创复古桌椅两件套纪念版",
                imgUrl: 'home_recommend_photo.png',
                price: 588,
                place: '杭州'
            },
            {
                id: '2',
                name: "陈思 | 景德镇鼻烟壶礼盒套装",
                imgUrl: 'home_recommend_photo1.png',
                price: 1099,
                place: '江西'
            },
            {
                id: '3',
                name: "梁苍之 | 西安民窑纯白轻雕刻餐具全套",
                imgUrl: 'home_recommend_photo2.png',
                price: 3488,
                place: '西安'
            },
            {
                id: '4',
                name: "联合工作室 | 原创复古桌椅两件套纪念版",
                imgUrl: 'home_recommend_photo.png',
                price: 2588,
                place: '青海'
            },
        ]
    };

    render() {
        return (
            <div className='HomeView'>
                <header>
                    <img src={require("./assets/home_logo_photo.png")} alt="" className='logo' />
                    <div className="search">
                        <img src={require("./assets/Nav_icon_search.png")} alt="" className="icon" />
                        <input type="text" placeholder="七夕首饰" />
                    </div>
                </header>
                <section>
                    <div className="carousel">
                        <div className="content">
                            <img src={require("./assets/home_banner photo.png")} alt="" />
                        </div>
                    </div>
                    <div className="area">
                        <ul>
                            <li>
                                <img src={require('./assets/home_icon_discont.png')} alt="" />
                                <div className="name">折扣专区</div>
                            </li>
                            <li>
                                <img src={require('./assets/home_icon_top.png')} alt="" />
                                <div className="name">人气磅单</div>
                            </li>
                            <li>
                                <img src={require('./assets/home_icon_quality.png')} alt="" />
                                <div className="name">质量保障</div>
                            </li>
                            <li>
                                <img src={require('./assets/home_icon_service.png')} alt="" />
                                <div className="name">无忧售后</div>
                            </li>

                        </ul>
                    </div>
                    <div className="card">
                        <img src={require("./assets/home_Porcelain_area_photo.png")} alt="" />
                        <img src={require("./assets/home_Porcelain_area_photo1.png")} alt="" />
                        <img src={require("./assets/home_Porcelain_area_photo2.png")} alt="" />
                    </div>
                    <div className='ad'>
                        <img src={require('./assets/home_banner_small photo.png')} alt="" />
                    </div>
                    <div className="may-like">
                        <div className="tab">
                            <div className='recommend active'>推荐</div>
                            <div className='new'>新品</div>
                        </div>
                        <ul className="product-list">
                            {this.state.productList.map((v) => (
                                <li key={v.id}>
                                    <div className="img">
                                        <img src={require(`./assets/${v.imgUrl}`)} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name">{v.name}</div>
                                        <div className="container">
                                            <div className="price">
                                                ￥ {v.price}
                                            </div>
                                            <div className="place">{v.place}</div>
                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}