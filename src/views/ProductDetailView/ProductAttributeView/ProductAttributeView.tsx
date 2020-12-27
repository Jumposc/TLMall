import React from 'react';
import { ProductAttributeData } from '../../../../shared/Product/Product';
import './ProductAttributeView.less'

export interface ProductAttributeViewProps {
    onCLickDefine: Function
    onClickClose: Function
    attributeData: ProductAttributeData
}
export interface ProductAttributeViewState {
    currentAttributeItem: number[];
    buyNumber: number
}



export class ProductAttributeView extends React.Component<ProductAttributeViewProps, ProductAttributeViewState> {

    state = {
        currentAttributeItem: new Array(this.props.attributeData.list.length).fill(0),
        buyNumber: 1
    }

    render() {
        return (
            <div className="ProductAttributeView">
                <div className="content">
                    <div className="top">
                        <img src={require("../accets/product_attribute_photo.png")} alt="" className="product-img" />
                        <div className="info">
                            <div className="product-name">{this.props.attributeData.name}</div>
                            <div className="amount">￥{this.props.attributeData.price}</div>
                        </div>
                        <img src={require("../accets/product_attribute_button_cancel.png")} alt="" className="close" onClick={() => { this.props.onClickClose() }} />
                    </div>
                    <div className="attribute-list">
                        <ul>
                            {this.props.attributeData.list.map((v, index) => {
                                return (
                                    <li key={index}>
                                        <div className="attribute-name">{v.name}</div>
                                        <ul>
                                            {v.items.map((v, i) => {
                                                return (
                                                    <li className={this.state.currentAttributeItem[index] === i ? "active" : ''} key={i}
                                                        onClick={() => { this.onCLickAttributeItem(index, i) }}>{v}</li>
                                                )
                                            })}
                                        </ul>
                                    </li>)
                            })}
                        </ul>
                    </div>
                    <div className="amount">
                        <div className="title">数量</div>
                        <div className="count">
                            <img draggable="false" onClick={() => { this.onClickBuyNum(this.state.buyNumber - 1) }}
                                src={require("../accets/product_attribute_button_sub.png")} alt="" className="sub" />
                            <div className="num">{this.state.buyNumber}</div>
                            <img draggable="false" onClick={() => { this.onClickBuyNum(this.state.buyNumber + 1) }}
                                src={require("../accets/product_attribute_button_add.png")} alt="" className="add" />
                        </div>
                    </div>
                    <button className="define" onClick={() => { this.props.onCLickDefine() }}>确定</button>
                </div>
            </div>
        )
    }

    onCLickAttributeItem(AttributeIndex: number, itemIndex: number): void {
        this.state.currentAttributeItem[AttributeIndex] = itemIndex;
        this.forceUpdate();
    }
    onClickBuyNum(num: number) {
        if (num < 1) {
            return
        }
        this.setState({
            buyNumber: num
        })
    }
}


