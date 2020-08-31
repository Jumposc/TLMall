import React from 'react';
import './CategoryView.less'
import { SmallCategoryListItemView } from './SmallCategoryListItemView';
import { TestDatabase } from './Test/TestDatabase';

export interface CategoryData {
    id:number
    categoryName:string
    adUrl: string    //广告地址
    hotCategoryList: SmallCategoryDataListItemData[] //快速索引的列表
    smallCategoryList: {      //小分类列表
        id:number
        name: string     
        listData: SmallCategoryDataListItemData[]
    }[]
}
export interface SmallCategoryDataListItemData {
    id:number
    imgUrl: string
    productName: string
}

export interface CategoryViewProps {
    match: {
        pramas: {
            categoryName?: string;
        }
    }
}
export interface CategoryViewState {
    search:string
    categoryNameList: string[] //tab列表名字
    currentTabIndex:number
    data: CategoryData
}

export default class CategoryView extends React.Component<CategoryViewProps, CategoryViewState> {
    state = {
        search:'',
        categoryNameList: [],
        currentTabIndex:0,
        data: {
            id:0,
            categoryName:'',
            adUrl: "top_ad.png",
            hotCategoryList: [],
            smallCategoryList: [
                {
                    id:0,
                    name: '',
                    listData: []
                }
            ]
        }
    }

    componentDidMount() {
        let data = TestDatabase.getInstance().getDataByDefault();
        this.setState({
            categoryNameList:data.categoryNameList,
            data: data.data
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
                                value={this.state.search} onChange={(e)=>{this.setState({search:e.currentTarget.value})}} />
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="tab">
                        <ul>
                            {this.state.categoryNameList.map((v, i) => {
                                return (
                                    <li className={this.state.currentTabIndex === i ? "activate":''} key={i} onClick={()=>{this.onClickTabItem(i)}}>
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
                            <img src={require(`./assets/${this.state.data.adUrl}`)} alt="" />
                        </div>
                        <div className="hot-small-category-list">
                            <ul>
                                {this.state.data.hotCategoryList.map((v, i) => {
                                    return <SmallCategoryListItemView data={v} key={i} />
                                })}
                            </ul>
                        </div>
                        {this.state.data.smallCategoryList.map((v, i) => {
                            return (
                                <div className="small-category-list" key={i}>
                                    <div className="small-category-list-name">{v.name}</div>
                                    <ul>
                                        {v.listData.map((v, i) => {
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

    onClickTabItem(i:number){
        let data = TestDatabase.getInstance().getDataByName(this.state.categoryNameList[i]);
        this.setState({
            categoryNameList:data.categoryNameList,
            data: data.data,
            currentTabIndex:i
        },()=>{
            window.scroll(0,0);
        })
    }
}