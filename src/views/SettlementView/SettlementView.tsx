import React from "react";
import { Link } from "react-router-dom";
import "./SettlementView.less";
import { Global } from "../../models/Global";

export interface SettlementViewProps {}

export interface SettlementViewState {
    orderList: OrderListItem[];
    voucherList: VoucherListItem[];
    couponList: CouponListItem[];
}

export interface OrderListItem {
    id: string;
    name: string;
    property: string;
    price: number;
    amount: number;
    freight: number;
    maxAmount: number;
    img: string;
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
        orderList: [
            {
                id: "33",
                name: "承唐宋之风原创三合一熏香炉纪念版",
                property: "绿色",
                price: 2000,
                amount: 3,
                freight: 0,
                maxAmount: 10,
                img: "/src/views/CartView/assets/cart_goods photo.png",
            },
            {
                id: "44",
                name: "熏香炉纪念版",
                property: "红色",
                price: 500,
                amount: 1,
                maxAmount: 10,
                freight: 10,
                img: "/src/views/CartView/assets/cart_goods photo.png",
            },
        ],
        voucherList: [
            {
                limit: 200,
                price: 20,
                isSelected: true,
            },
        ],
        couponList: [
            {
                price: 20,
                isSelected: false,
            },
        ],
    };

    onClickSubBtn(v: OrderListItem) {
        if (v.amount <= 1) {
            return;
        }
        v.amount--;
        this.forceUpdate();
    }

    onClickAddBtn(v: OrderListItem) {
        if (v.amount >= v.maxAmount) {
            return;
        }
        v.amount++;
        this.forceUpdate();
    }

    total() {
        return this.state.orderList.reduce((total, v) => {
            return total + v.price * v.amount;
        }, 0);
    }

    voucher() {
        let v = this.state.voucherList.find((v) => v.isSelected === true);
        let c = this.state.couponList.find((v) => v.isSelected === true);
        return (v ? v.price : 0) + (c ? c.price : 0);
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
                    <div className="address">
                        <div className="user">
                            <span>林设计</span>
                            15111111111
                        </div>
                        <div className="place">
                            <span>公司</span>
                            广东省深圳市南山区深圳办公大楼239号
                        </div>
                        <div
                            className="more"
                            onClick={() => {
                                Global.history.push("/address");
                            }}
                        >
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
                                    ? `满${
                                          this.state.voucherList.find(
                                              (v) => v.isSelected === true
                                          )?.limit
                                      }减${
                                          this.state.voucherList.find(
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
