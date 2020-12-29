import React from 'react';
import { ProductData, ProductCommentItem } from '../../../shared/Product/Product';
import { Global } from '../../models/Global';
import { ProductUtil } from '../../models/ProductUtil';
import { CartDB } from '../CartView/CartDB';
import { ProductAttributeView } from './ProductAttributeView/ProductAttributeView'
import './ProductDetailView.less'

export interface ProductDetailViewProps {

}
export interface ProductDetailViewState {
    page: number;
    carouselMargin: number;
    product: ProductData;
    comments: ProductCommentItem[],
    isOpenPopup: boolean;
    property:string
}

export default class ProductDetailView extends React.Component<ProductDetailViewProps, ProductDetailViewState>{
    state = {
        property:'',
        page: 0,
        carouselMargin: 0,
        isOpenPopup: false,
        product: {
            id: "",
            name: '',
            imageUrl: '',
            detail: {
                imageUrls: ['product_details_big_1.png'],
                productTitle: '',
                subTitle: '',
                price: 0,
                originalPrice: 0,
                seller: '',
                tags: [''],
                deliveryPlace: '',
                freight: 0,
                noReasonDay: 0,
                maxAmount: 0
            },
            attribute:
            {
                name: '',
                imgUrl: 'product_details_big_1.png',
                price: 0,
                list: [
                    {
                        name: '',
                        items: []
                    }
                ]
            }
        },
        comments: [
            {
                productId: '',
                avatarUrl: 'product_details_small_photo.png',
                nickName: '',
                starNumber: 0,
                text: '',
                tags: [],
                imgs: []
            }
        ],

    }
    carousel = {
        onMouseDownX: 0,
        moveingMargin: 0,
        isDown: false,
        scroll: 0,
    }
    async componentWillMount() {
        let product = await ProductUtil.getProduct('1');
        let comments = await ProductUtil.getProductComment('1', 10);
        this.setState({
            product: product,
            comments: comments
        })
    }

    render() {
        return (
            <div className="ProductDetailView">
                <header>
                    <div onClick={() => this.onClickBackBtn()} className="back">
                        <img src={require("./accets/product_details_button_back.png")} alt="" />
                    </div>
                    <div onClick={() => this.onClickToCartBtn()} className="to-cart">
                        <img src={require("./accets/product_details_button_cart.png")} alt="" />
                    </div>
                </header>
                <section>
                    <div className="carousel">
                        <div className="container" style={{ marginLeft: this.state.carouselMargin }}
                            onMouseDown={(e) => { this.onMouseDownCarousel(e) }}
                            onMouseUp={(e) => { this.onMouseUpCarousel(e) }}
                            onMouseMove={(e) => { this.onMouseMoveCarousel(e) }}
                            onMouseLeave={(e) => { this.onMouseLeaveCarousel(e) }}
                            onTouchStart={(e) => { this.onTouchStartCarousel(e) }}
                            onTouchEnd={(e) => { this.onTouchEndCarousel(e) }}
                            onTouchMove={(e) => { this.onTouchMoveCarousel(e) }}>
                            {this.state.product.detail.imageUrls.map((v, i) => {
                                return <img draggable="false" key={i} src={require(`./accets/${v}`)} alt="" />
                            })}
                        </div>
                        <div className="pager">
                            <span>{this.state.page + 1}/4</span>
                        </div>
                    </div>
                    <div className="main-description">
                        <div className="title">{this.state.product.detail.productTitle}</div>
                        <div className="sub-title">{this.state.product.detail.subTitle}</div>
                        {this.state.product.detail.tags.map((v, i) => {
                            return <div className="tag" key={i}>{v}</div>
                        })}
                        <div className="price">
                            ￥{this.state.product.detail.price}
                            <span className="source-price">￥{this.state.product.detail.originalPrice}</span>
                        </div>
                        <button className="share">
                            <img src={require("./accets/product_details_icon_share.png")} alt="" />
                            <div>分享</div>
                        </button>
                    </div>
                    <div className="merchant-description">
                        <div className="delivery-place">
                            <span>发货</span>
                            <div className="city-name">·{this.state.product.detail.deliveryPlace} ·{this.state.product.detail.freight !== 0 ? "包邮" : `${this.state.product.detail.freight}元`}</div>
                        </div>
                        <div className="safeguard-description">
                            <span>保障</span>
                            <div className="description">·正品保障 ·{this.state.product.detail.noReasonDay > 0 ? `${this.state.product.detail.noReasonDay}天无理由退换货` : `不支持无理由退换`} </div>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="top">
                            <div className="title">评价({this.state.comments.length})</div>
                            <button className="see-all">
                                <div className="text">查看全部</div>
                                <img draggable="false" src={require("./accets/product_details_button_all.png")} alt="" />
                            </button>
                        </div>
                        <div className="content">
                            <div className="user">
                                <img src={require(`./accets/${this.state.comments[0].avatarUrl}`)} alt="" />
                                <div className="right">
                                    <div className="nickName">{this.state.comments[0].nickName}</div>
                                    <div className="star-list">
                                        {this.createStar(this.state.comments[0].starNumber)}
                                    </div>
                                </div>
                            </div>
                            <div className="comment-text">
                                {this.state.comments[0].text}
                            </div>
                            <div className="tag-list">
                                {this.state.comments[0].tags.map((v, i) => {
                                    return <div key={i} className="tag">{v}</div>
                                })}
                            </div>
                            <div className="product-photo-list">
                                <img src={require("./accets/product_details_small_photo.png")} alt="" />
                                <img src={require("./accets/product_details_small_photo.png")} alt="" />
                                <img src={require("./accets/product_details_small_photo.png")} alt="" />
                                <img src={require("./accets/product_details_small_photo.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="left">
                        <div className="service">
                            <img draggable="false" src={require("./accets/product_details_icon_customer_service.png")} alt="" />
                            <div className="name">客服</div>
                        </div>
                        <div className="collection">
                            <img draggable="false" src={require("./accets/product_details_icon_collection.png")} alt="" />
                            <div className="name">收藏</div>
                        </div>
                    </div>
                    <div className="right">
                        <button className="add-cart" onClick={() => { this.onClickAddCart() }}>加入购物车</button>
                        <button className="buy" onClick={() => { this.onClickBuy() }}>立即购买</button>
                    </div>
                </footer>
                {this.state.isOpenPopup && <ProductAttributeView  attributeData={this.state.product.attribute} onCLickDefine={this.onCLickDefine.bind(this)} onClickClose={this.onClickClose.bind(this)} />}
            </div>
        )
    }

    onClickToCartBtn() {
        Global.history.push('/cart')
    }
    onClickBackBtn() {
        Global.history.goBack()
    }

    onMouseDownCarousel(e: React.MouseEvent): void {
        this.carousel.isDown = true;
        this.carousel.onMouseDownX = e.clientX;
    }

    onMouseUpCarousel(e: React.MouseEvent): void {
        this.carousel.isDown = false;
        let mouseUpX = e.clientX;
        if (mouseUpX - this.carousel.onMouseDownX < -200 && this.state.page < this.state.product.detail.imageUrls.length - 1) {
            this.setPage(this.state.page += 1);
        }
        else if (mouseUpX - this.carousel.onMouseDownX > 200 && this.state.page > 0) {
            this.setPage(this.state.page -= 1);
        }
        else {
            this.setPage(this.state.page);
        }
    }

    onMouseMoveCarousel(e: React.MouseEvent): void {
        if (!this.carousel.isDown) {
            return
        }
        let mouseMoveX = e.clientX
        this.carousel.moveingMargin = (this.carousel.onMouseDownX - mouseMoveX) * -1 - this.state.page * 750;
        this.setState({
            carouselMargin: this.carousel.moveingMargin
        })

    }

    onMouseLeaveCarousel(e: React.MouseEvent): void {
        if (!this.carousel.isDown) {
            return;
        }
        let mid = window.innerWidth / 2;
        if (e.clientX > mid && this.state.page > 0) {
            this.setPage(this.state.page - 1);
            this.carousel.isDown = false;
        }
        else if (e.clientX < mid && this.state.page < this.state.product.detail.imageUrls.length - 1) {
            this.setPage(this.state.page + 1);
            this.carousel.isDown = false;
        }
        else {
            this.setPage(this.state.page);
            this.carousel.isDown = false;
        }

    }

    onTouchStartCarousel(e: React.TouchEvent): void {
        this.carousel.isDown = true;
        this.carousel.onMouseDownX = e.touches[0].clientX;
    }

    onTouchEndCarousel(e: React.TouchEvent): void {
        this.carousel.isDown = false;
        let mouseUpX = this.carousel.moveingMargin + this.state.page * 750;
        if (mouseUpX < -200 && this.state.page < this.state.product.detail.imageUrls.length - 1) {
            this.setPage(this.state.page += 1);
        }
        else if (mouseUpX > 200 && this.state.page > 0) {
            this.setPage(this.state.page -= 1);
        }
        else {
            this.setPage(this.state.page);
        }
    }

    onTouchMoveCarousel(e: React.TouchEvent): void {
        if (!this.carousel.isDown) {
            return
        }
        let mouseMoveX = e.touches[0].clientX
        this.carousel.moveingMargin = (this.carousel.onMouseDownX - mouseMoveX) * -1 - this.state.page * 750;
        this.setState({
            carouselMargin: this.carousel.moveingMargin
        })

    }

    setPage(page: number): void {
        if (page < 0 || page > this.state.product.detail.imageUrls.length) {
            return;
        }
        this.state.page = page;
        this.setState({
            carouselMargin: this.state.page * - 750
        })
    }

    createStar(num: number): JSX.Element[] {
        let starList = [];
        for (let i = 0; i < num; i++) {
            starList.push(<img key={i} src={require("./accets/product_details_star_review.png")} alt="" />)
        }
        return starList;
    }

    onClickAddCart(): void {
        this.setState({
            isOpenPopup: true
        })
        
    }

    onClickBuy(): void {
        this.setState({
            isOpenPopup: true
        })
    }

    onClickClose(): void {
        this.setState({
            isOpenPopup: false
        })
    }

    onCLickDefine(amount:number) {
        this.setState({
            isOpenPopup: false
        })
        CartDB.getCartDB().addCartItem({
            id: Math.random() + '112233',
            img: this.state.product.imageUrl,
            name: this.state.product.name,
            property: this.state.property,
            price: this.state.product.attribute.price,
            amount: amount,
            maxAmount: this.state.product.detail.maxAmount,
            freight: this.state.product.detail.freight,
            isSelected: false
        })
    }
}