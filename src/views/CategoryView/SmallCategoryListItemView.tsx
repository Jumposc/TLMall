import React from 'react';
import { ProductCategory } from '../../../shared/Product/Product';


export interface SamllCategoryListViewProps {
    data:ProductCategory["smallCategoryList"][any]["products"][any]
}
export interface SmallCategoryListViewState {

}

export class SmallCategoryListItemView extends React.Component<SamllCategoryListViewProps> {
    render() {
        return (
            <li>
                <img src={require(`./assets/${this.props.data.imageUrl}`)} alt="" />
                <div className="product-name">{this.props.data.name}</div>
            </li>
        )
    }
}