import React from "react";
import { Link } from "react-router-dom";
import "./SettlementView.less";
import { Global } from "../../models/Global";
import { CartDB } from '../CartView/CartDB';
import { AddressListItem } from '../AddressView/AddressView'
import { Product } from '../CartView/CartView'

export interface SettlementViewProps { }

export interface SettlementViewState {
    buyerAddress: AddressListItem;
    orderList: Product[];
    voucherList: VoucherListItem[];
    couponList: CouponListItem[];
}

export interface VoucherListItem {
    limit: number;
    price: number;
    isSelected: boolean;
}

export interface CouponListItem {
    price: number;
    isSelected: boolean;
}

export default class SettlementView extends React.Component<
    SettlementViewProps,
    SettlementViewState
    > {
    state: SettlementViewState = {
        buyerAddress: {
            id: "11",
            name: "李小姐",
            tel: "13xxxxxxxxx",
            remarks: "公司",
            address: "xxx xxx xxx xxxxxxxxx",
            isDefault: true,
        },
        orderList: [
            // {
            //     id: "33",
            //     name: "承唐宋之风原创三合一熏香炉纪念版",
            //     property: "绿色",
            //     price: 2000,
            //     amount: 3,
            //     freight: 0,
            //     maxAmount: 10,
            //     img: "/src/views/CartView/assets/cart_goods photo.png",
            // },

            // {
            //     id: "44",
            //     name: "熏香炉纪念版",
            //     property: "红色",
            //     price: 500,
            //     amount: 1,
            //     maxAmount: 10,
            //     freight: 10,
            //     img: "/src/views/CartView/assets/cart_goods photo.png",
            // },
        ],
        voucherList: [
            // {
            //     limit: 200,
            //     price: 20,
            //     isSelected: true,
            // },
        ],
        couponList: [
            // {
            //     price: 20,
            //     isSelected: false,
            // },
        ],
    };

    componentDidMount() {
        let data = CartDB.getCartDB().getOrderData()
        this.state.orderList = data.orderList.slice()
        this.state.voucherList = data.voucherList.slice()
        this.state.couponList = data.couponList.slice()
        this.state.buyerAddress = data.buyerAddress!
        this.forceUpdate()
    }

    onClickSubBtn(v: Product) {
        if (v.amount <= 1) {
            return;
        }
        v.amount--;
        let res = CartDB.getCartDB().updataCartProduct(v)
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
        v.amount++;
        let res = CartDB.getCartDB().updataCartProduct(v)
        if (res.status !== 200) {
            alert('商品信息错误')
            v.amount--;
            return
        }
        this.forceUpdate();
    }

    total() {
        return this.state.orderList.reduce((total, v) => {
            return total + v.price * v.amount + v.freight;
        }, 0);
    }

    voucher() {
        let voucher = this.state.voucherList.find((v) => v.isSelected === true);
        let coupon = this.state.couponList.find((v) => v.isSelected === true);
        return (voucher ? voucher.price : 0) + (coupon ? coupon.price : 0);
    }

    render() {
        return (
            <div className="SettlementView">
                <header>
                    <div className="title">结算</div>
                    <div
                        className="back"
                        onClick={() => {
                            Global.history.push("/cart");
                        }}
                    >
                        <img
                            src="/src/views/SettlementView/assets/left_btn.png"
                            alt=""
                        />
                    </div>
                </header>
                <main>
                    <div className="address"
                        onClick={() => { Global.history.push("/address"); }}
                    >
                        <div className="user">
                            <span>{this.state.buyerAddress.name}</span>
                            {this.state.buyerAddress.tel}
                        </div>
                        <div className="place">
                            <span>{this.state.buyerAddress.remarks}</span>
                            {this.state.buyerAddress.address}
                        </div>
                        <div className="more">
                            <img
                                src="/src/views/SettlementView/assets/right_btn.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <ul className="product-list">
                        {this.state.orderList.map((v, i) => (
                            <li key={i}>
                                <div className="top">
                                    <div className="img">
                                        <img src={v.img} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name">{v.name}</div>
                                        <div className="property">
                                            {v.property}
                                        </div>
                                        <div className="price">
                                            ￥ {v.price}
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="amount">
                                        <div className="title">购买数量</div>
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
                                            <div className="number">
                                                {v.amount}
                                            </div>
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
                                    <div className="freight">
                                        运费
                                        <span>
                                            {v.freight === 0
                                                ? "包邮"
                                                : v.freight}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="voucher">
                        <div className="top">
                            <div className="title">优惠券</div>
                            <div
                                className={
                                    this.state.voucherList.find(
                                        (v) => v.isSelected === true
                                    )
                                        ? "many"
                                        : "many null"
                                }
                            >
                                {this.state.voucherList.find(
                                    (v) => v.isSelected === true
                                )
                                    ? `满${this.state.voucherList.find(
                                        (v) => v.isSelected === true
                                    )?.limit
                                    }减${this.state.voucherList.find(
                                        (v) => v.isSelected === true
                                    )?.price
                                    }`
                                    : "无"}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="title">代金券</div>
                            <div
                                className={
                                    this.state.couponList.find(
                                        (v) => v.isSelected === true
                                    )
                                        ? "many"
                                        : "many null"
                                }
                            >
                                {this.state.couponList.find(
                                    (v) => v.isSelected === true
                                )
                                    ? this.state.couponList.find(
                                        (v) => v.isSelected === true
                                    )?.price
                                    : "无"}
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="check-pay">
                        <span className="total">
                            合计：
                            <span className="price">
                                ￥{this.total() - this.voucher()}
                            </span>
                            <span className="discount">
                                (已优惠￥{this.voucher()})
                            </span>
                        </span>
                        <button
                            onClick={() => {
                                Global.history.replace("/cart");
                            }}
                        >
                            确认支付
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
}
