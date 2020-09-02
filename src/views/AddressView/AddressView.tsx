import React from "react";
import { Link } from "react-router-dom";
import "./AddressView.less";
import { Global } from "../../models/Global";

export interface AddressViewProps {}

export interface AddressViewState {
    addressList: AddressListItem[];
}

export interface AddressListItem {
    name: string;
    tel: string;
    remarks: string;
    address: string;
    isDefault: boolean;
}

export default class AddressView extends React.Component<
    AddressViewProps,
    AddressViewState
> {
    state: AddressViewState = {
        addressList: [
            {
                name: "李小姐",
                tel: "13xxxxxxxxx",
                remarks: "公司",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: true,
            },
            {
                name: "王先生",
                tel: "13xxxxxxxxx",
                remarks: "学校",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                name: "林设计",
                tel: "13xxxxxxxxx",
                remarks: "家",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                name: "王先生",
                tel: "13xxxxxxxxx",
                remarks: "学校",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                name: "林设计",
                tel: "13xxxxxxxxx",
                remarks: "家",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
        ],
    };

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
                                    <div className="default-address">
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
                                        <img
                                            src="/src/views/AddressView/assets/edit.png"
                                            alt=""
                                        />
                                        编辑
                                        <img
                                            src="/src/views/AddressView/assets/delete.png"
                                            alt=""
                                        />
                                        删除
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
                <button>新增收货地址</button>
            </div>
        );
    }
}
