import React from "react";
import { Link } from "react-router-dom";
import "./AddressView.less";
import { Global } from "../../models/Global";
import { CartDB, AddressListItem } from '../CartView/CartDB';

export interface AddressViewProps { }

export interface AddressViewState {
    addressList: AddressListItem[];
}

export default class AddressView extends React.Component<
    AddressViewProps,
    AddressViewState
    > {
    state: AddressViewState = {
        addressList: [
            // {
            //     id:"11",
            //     name: "李小姐",
            //     tel: "13xxxxxxxxx",
            //     remarks: "公司",
            //     address: "xxx xxx xxx xxxxxxxxx",
            //     isDefault: true,
            // },

        ],
    };

    componentDidMount() {
        Global.loading.showLoading()
        let data = CartDB.getCartDB().getAdderssData()
        Global.loading.hideLoading()
        this.state.addressList = data.addressList.slice()
        this.forceUpdate()
    }

    onSelectDefaultAddress(v: AddressListItem) {
        Global.loading.showLoading()
        let res = CartDB.getCartDB().selectDefaultAddress(v)
        Global.loading.hideLoading()
        if (res.status !== 200) {
            alert('修改失败')
            return
        }
        this.state.addressList.forEach(value => { value.isDefault = false })
        v.isDefault = true
        this.forceUpdate()
    }

    onClickDelBtn(id: string, index: number) {
        if (this.state.addressList[index].isDefault === true) {
            alert('不能删除默认地址选项')
            return
        }
        Global.loading.showLoading()
        let res = CartDB.getCartDB().delAddressById(id)
        Global.loading.hideLoading()
        if (res.status !== 200) {
            alert('删除失败')
            return
        }
        this.state.addressList.splice(index, 1)
        this.forceUpdate()
    }

    render() {
        return (
            <div className="AddressView">
                <header>
                    <div className="title">收货地址</div>
                    <div
                        className="back"
                        onClick={() => {
                            Global.history.push("/settlement");
                        }}
                    >
                        <img
                            src="/src/views/AddressView/assets/left_btn.png"
                            alt=""
                        />
                    </div>
                </header>
                <main>
                    <ul className="address-list">
                        {this.state.addressList.map((v, i) => (
                            <li key={i}>
                                <div className="top">
                                    <div className="name">{v.name}</div>
                                    <div className="right">
                                        {v.tel}
                                        <span>{v.remarks}</span>
                                    </div>
                                </div>
                                <div className="place">{v.address}</div>
                                <div className="bottom">
                                    <div className="default-address"
                                        onClick={() => { this.onSelectDefaultAddress(v) }}>
                                        <img
                                            src={
                                                v.isDefault === true
                                                    ? "/src/views/AddressView/assets/selected_btn.png"
                                                    : "/src/views/AddressView/assets/no_selected_btn.png"
                                            }
                                            alt=""
                                        />
                                        默认地址
                                    </div>
                                    <div className="op">
                                        <span>
                                            <img src="/src/views/AddressView/assets/edit.png" />
                                            编辑
                                        </span>
                                        <span
                                            onClick={() => { this.onClickDelBtn(v.id, i) }}>
                                            <img src="/src/views/AddressView/assets/delete.png" />
                                            删除
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button>新增收货地址</button>
                </main>
            </div>
        );
    }
}
