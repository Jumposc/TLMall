import React from 'react';
import { Category, ProductUtil } from '../../models/ProductUtil';
import './CategoryView.less'
import { SmallCategoryListItemView } from './SmallCategoryListItemView';



export interface CategoryViewProps {
    match: {
        pramas: {
            categoryName?: string;
        }
    }
}
export interface CategoryViewState {
    search: string
    categoryNameList: string[] //tab列表名字
    currentTabIndex: number
    categoryData: Category
}

export default class CategoryView extends React.Component<CategoryViewProps, CategoryViewState> {
    state = {
        search: '',
        categoryNameList: [''],
        currentTabIndex: 0,
        categoryData: {
            id: '',
            categoryName: '',
            adUrl: 'classification_fanshion goods photo3@2x.png',
            hotCategoryList: [],
            smallCategoryList: [
                {
                    name: '',
                    products: [],
                }
            ]
        }
    }



    async componentDidMount() {
        let category = await ProductUtil.getCategories()
        let categoryData = await ProductUtil.getCategoryProduct(category[0].id)
        this.setState({
            categoryNameList: category.map(v =>v.name),
            categoryData: categoryData
        })
    }


    render() {
        return (
            <div className="CategoryView">
                <header>
                    <div className="fixed">
                        <div className="search-container">
                            <div className="search-input">
                                <img src={require("./assets/Nav_icon_search.png")} alt="" />
                                <input type="text" placeholder="七夕礼物"
                                    value={this.state.search} onChange={(e) => { this.setState({ search: e.currentTarget.value }) }} />
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="tab">
                        <ul>
                            {this.state.categoryNameList.map((v, i) => {
                                return (
                                    <li className={this.state.currentTabIndex === i ? "activate" : ''} key={i} onClick={() => { this.onClickTabItem(i) }}>
                                        <div className="category-name">
                                            {v}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="content">
                        <div className="top-ad">
                            <img src={require(`./assets/${this.state.categoryData.adUrl}`)} alt="" />
                        </div>
                        <div className="hot-small-category-list">
                            <ul>
                                {this.state.categoryData.hotCategoryList.map((v, i) => {
                                    return <SmallCategoryListItemView data={v} key={i} />
                                })}
                            </ul>
                        </div>
                        {this.state.categoryData.smallCategoryList.map((v, i) => {
                            return (
                                <div className="small-category-list" key={i}>
                                    <div className="small-category-list-name">{v.name}</div>
                                    <ul>
                                        {v.products.map((v, i) => {
                                            return <SmallCategoryListItemView data={v} key={i} />
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    }

    async onClickTabItem(i: number) {
        let categoryData = await ProductUtil.getCategoryProduct(this.state.categoryNameList[i]);
        this.setState({
            categoryData: categoryData,
            currentTabIndex: i
        }, () => {
            window.scroll(0, 0);
        })
    }
}