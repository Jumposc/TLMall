import React from 'react';
import { SmallCategoryDataListItemData } from './CategoryView';


export interface SamllCategoryListViewProps {
    data:SmallCategoryDataListItemData
}
export interface SmallCategoryListViewState {

}

export class SmallCategoryListItemView extends React.Component<SamllCategoryListViewProps> {
    render() {
        return (
            <li>
                <img src={require(`./assets/${this.props.data.imgUrl}`)} alt="" />
                <div className="product-name">{this.props.data.productName}</div>
            </li>
        )
    }
}