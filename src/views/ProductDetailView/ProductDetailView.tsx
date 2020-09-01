import React from 'react';
import './ProductDetailView.less'

export interface ProductDetailViewProps{

}
export interface ProductDetailViewState{
    
}

export default class ProductDetailView extends React.Component<ProductDetailViewProps,ProductDetailViewState>{
    render(){
        return (
            <div className="ProductDetailView">
                <header>
                    <div className="back">
                        <img src={require("./accets/product_details_button_back.png")} alt=""/>
                    </div>
                    <div className="to-cart">
                        <img src={require("./accets/product_details_button_cart.png")} alt=""/>
                    </div>
                </header>
                <section>
                    <div className="big-photo">
                        <img src={require("./accets/product_details_big.png")} alt=""/>
                        <div className="pager">
                            <span>1/4</span>
                        </div>
                    </div>
                    <div className="main-description">
                        <div className="title">承唐宋之风原创三合一熏香炉</div>
                        <div className="sub-title">大师之作 经典传承</div>
                        <div className="tag">限时特惠</div>
                        <div className="amount">
                            ￥2300
                            <span className="source-amount">￥2500</span>
                        </div>
                        <button className="share">
                            <img src={require("./accets/product_details_icon_share.png")} alt=""/>
                            <div>分享</div>
                        </button>
                    </div>
                    <div className="merchant-description">
                        <div className="delivery-place">
                            <span>发货</span>
                            <div className="city-name">·广东佛山 ·包邮</div>
                        </div>
                        <div className="safeguard-description">
                            <span>保障</span>
                            <div className="description">·正品保障 ·7天无理由退换货 </div>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="top">
                            <div className="title">评价(23)</div>
                            <button className="see-all">
                                <div className="text">查看全部</div>
                                <img src={require("./accets/product_details_button_all.png")} alt=""/>
                            </button>
                        </div>
                        <div className="content">
                            <div className="user">
                                <img src={require('./accets/avatar.png')} alt=""/>
                                <div className="right">
                                    <div className="nickName">小熊****星</div>
                                    <div className="star-list">
                                        <img src={require("./accets/product_details_star_review.png")} alt=""/>
                                        <img src={require("./accets/product_details_star_review.png")} alt=""/>
                                        <img src={require("./accets/product_details_star_review.png")} alt=""/>
                                        <img src={require("./accets/product_details_star_review.png")} alt=""/>
                                        <img src={require("./accets/product_details_star_review.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-text">
                            很漂亮，反正就是很好，真的很不错，以后还会继续支持，非常满意的一次购物体验
                            </div>
                            <div className="tag-list">
                                <div className="tag">质量好</div>
                                <div className="tag">实图比照片赞</div>
                                <div className="tag">颜色漂亮</div>
                                <div className="tag">做工精致</div>
                                <div className="tag">解答耐心</div>
                                <div className="tag">服务贴心</div>
                                <div className="tag">包装精美</div>
                            </div>
                            <div className="product-photo-list">
                                <img src={require("./accets/product_details_small_photo.png")} alt=""/>
                                <img src={require("./accets/product_details_small_photo.png")} alt=""/>
                                <img src={require("./accets/product_details_small_photo.png")} alt=""/>
                                <img src={require("./accets/product_details_small_photo.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="left">
                        <div className="service">
                            <img src={require("./accets/product_details_icon_customer_service.png")} alt=""/>
                            <div className="name">客服</div>
                        </div>
                        <div className="collection">
                            <img src={require("./accets/product_details_icon_collection.png")} alt=""/>
                            <div className="name">收藏</div>
                        </div>
                    </div>
                    <div className="right">
                        <button className="add-cart">加入购物车</button>
                        <button className="buy">立即购买</button>
                    </div>
                </footer>
            </div>
        )
    }
}