import React from "react";
import { Link } from "react-router-dom";
import "./CartView.less";
import { Global } from "../../models/Global";
import { CartDB, Product, MayLikeListItem } from './CartDB';

export interface CartViewProps { }

export interface CartViewState {
    cartList: Product[];
    mayLikeList: MayLikeListItem[];
    isAllSelected: boolean;
}

export default class CartView extends React.Component<
    CartViewProps,
    CartViewState
    > {
    state: CartViewState = {
        cartList: [
            // {
            //     id: "11",
            //     img: "/src/views/CartView/assets/cart_goods photo.png",
            //     name: "莫源 | 独自设计·鼻烟壶套装加送盒子",
            //     property: "绿色",
            //     price: 1000,
            //     amount: 5,
            //     maxAmount: 10,
            //     isSelected: true,
            // },
            // {
            //     id: "22",
            //     img: "/src/views/CartView/assets/cart_goods photo1.png",
            //     name: "莫源 | 独自设计·鼻烟壶套装加送盒子",
            //     property: "绿色",
            //     price: 500,
            //     amount: 2,
            //     maxAmount: 10,
            //     isSelected: false,
            // },
        ],
        mayLikeList: [
            // {
            //     id: "111",
            //     img: "/src/views/CartView/assets/cart_may like photo.png",
            //     name: "慢生活 | 铜制口红外壳，手工雕刻",
            //     price: 588,
            //     place: "杭州",
            // },
        ],
        isAllSelected: false,
    };

    componentDidMount() {
        Global.loading.show()
        let CartData = CartDB.getCartDB().getCartData()
        this.state.cartList = CartData.cartList.slice()
        this.state.mayLikeList = CartData.mayLikeList.slice()
        this.state.isAllSelected = this.state.cartList.find(
            (v) => v.isSelected === false
        )
            ? false
            : true;
        Global.loading.hide()
        this.forceUpdate()
    }

    onClickSubBtn(v: Product) {
        if (v.amount <= 1) {
            return;
        }
        Global.loading.show()
        v.amount--;
        let res = CartDB.getCartDB().updataCartProduct(v)
        Global.loading.hide()
        if (res.status !== 200) {
            alert('商品信息错误')
            v.amount++;
            return
        }
        this.forceUpdate();
    }

    onClickAddBtn(v: Product) {
        if (v.amount >= v.maxAmount) {
            return;
        }
        Global.loading.show()
        v.amount++;
        let res = CartDB.getCartDB().updataCartProduct(v)
        Global.loading.hide()
        if (res.status !== 200) {
            alert('商品信息错误')
            v.amount--;
            return
        }
        this.forceUpdate();
    }

    onClickSelectBtn(v: Product) {
        Global.loading.show()
        v.isSelected = !v.isSelected;
        let res = CartDB.getCartDB().updataCartProduct(v)
        Global.loading.hide()
        if (res.status !== 200) {
            alert('商品信息错误')
            v.isSelected = !v.isSelected;
            return
        }
        this.state.isAllSelected = this.state.cartList.find(
            (v) => v.isSelected === false
        )
            ? false
            : true;
        this.forceUpdate();
    }

    onClickSelectedAllBtn() {
        Global.loading.show()
        this.state.isAllSelected = !this.state.isAllSelected;
        let res = CartDB.getCartDB().updataAllCartProductSelected(this.state.isAllSelected)
        Global.loading.hide()
        if (res.status !== 200) {
            alert('修改失败')
            this.state.isAllSelected = !this.state.isAllSelected;
            return
        }
        this.state.cartList.forEach((v) => {
            v.isSelected = this.state.isAllSelected;
        });
        this.forceUpdate();
    }

    sum() {
        let sum = 0;
        sum = this.state.cartList.reduce((total, v) => {
            if (v.isSelected) {
                return total + v.price * v.amount;
            }
            return total;
        }, 0);
        return sum;
    }

    render() {
        return (
            <div className="CartView">
                <header>
                    <div className="title">购物车</div>
                    <div className="icon">编辑</div>
                </header>
                <main>
                    <ul className="cart">
                        {this.state.cartList.map((v) => (
                            <li key={v.id}>
                                <div
                                    className="check-box"
                                    onClick={() => {
                                        this.onClickSelectBtn(v);
                                    }}
                                >
                                    {v.isSelected ? (
                                        <img
                                            src={
                                                "/src/views/CartView/assets/selected_btn.png"
                                            }
                                            alt=""
                                        />
                                    ) : (
                                            <img
                                                src={
                                                    "/src/views/CartView/assets/no_selected_btn.png"
                                                }
                                                alt=""
                                            />
                                        )}
                                </div>
                                <div className="img">
                                    <img src={v.img} alt="" />
                                </div>
                                <div className="details">
                                    <div className="name">{v.name}</div>
                                    <div className="property">{v.property}</div>
                                    <div className="price">￥ {v.price}</div>
                                    <div className="amount">
                                        <div
                                            className="sub"
                                            onClick={() => {
                                                this.onClickSubBtn(v);
                                            }}
                                        >
                                            <img
                                                src={
                                                    "/src/views/CartView/assets/sub_btn.png"
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="number">{v.amount}</div>
                                        <div
                                            className="add"
                                            onClick={() => {
                                                this.onClickAddBtn(v);
                                            }}
                                        >
                                            <img
                                                src={
                                                    "/src/views/CartView/assets/add_btn.png"
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="may-like">
                        <div className="title">猜你喜欢</div>
                        <ul className="product-list">
                            {this.state.mayLikeList.map((v) => (
                                <li key={v.id}>
                                    <div className="img">
                                        <img src={v.img} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name">{v.name}</div>
                                        <div className="price">
                                            ￥ {v.price}
                                        </div>
                                        <div className="place">{v.place}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
                <footer>
                    <div className="select-all"
                        onClick={() => {
                            this.onClickSelectedAllBtn();
                        }}
                    >
                        {this.state.isAllSelected ? (
                            <img src={"/src/views/CartView/assets/selected_btn.png"} />
                        ) :
                            (
                                <img src={"/src/views/CartView/assets/no_selected_btn.png"} />
                            )}
                        全选
                    </div>
                    <div className="total">
                        <span>合计:</span>
                        <span className="sum">￥ {this.sum()}</span>
                        <button className={this.state.cartList.find(v => v.isSelected === true) ? "settle" : "settle disabled"}
                            onClick={() => {
                                Global.history.push("settlement");
                            }}
                        >
                            结算
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
}
