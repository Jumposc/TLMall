import { CategoryData } from '../CategoryView';


export class TestDatabase {
    private static instance: TestDatabase;
    static getInstance(): TestDatabase {
        if (!this.instance) {
            this.instance = new TestDatabase();
        }
        return this.instance;
    }
    data = {
        categoryNameList: ['石头',"首饰",'石头',"首饰",'石头',"首饰",'石头',"首饰",'石头',"首饰",'石头',"首饰",'石头',"首饰",],
        Listdata: [
            {
                id:1,
                categoryName:"石头",
                adUrl: "top_ad.png",
                hotCategoryList: [
                    {
                        id:1,
                        productName: "首饰",
                        imgUrl: 'classification_fanshion goods photo2@2x.png',

                    },
                    {
                        id:2,
                        productName: "发簪",
                        imgUrl: 'classification_fanshion goods photo3@2x.png',

                    },
                    {
                        id:3,
                        productName: "手环",
                        imgUrl: 'classification_fanshion goods.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                ],
                smallCategoryList: [
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "复古",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                ]
            },
            {
                id:2,
                categoryName:"首饰",
                adUrl: "top_ad.png",
                hotCategoryList: [
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "发簪",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "手环",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                    {
                        id:4,
                        productName: "首饰",
                        imgUrl: 'classification_ retro product.png',

                    },
                ],
                smallCategoryList: [
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_goods.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_goods.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_goods.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_goods.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "复古",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                    {
                        name: "时尚",
                        listData: [
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "发簪",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "手环",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                            {
                                id:4,
                                productName: "首饰",
                                imgUrl: 'classification_ retro product.png',

                            },
                        ],

                    },
                ]
            },
        ]
    }

    getDataByName(name:string):{data:CategoryData,categoryNameList:string[]} {
        let data = this.data.Listdata.find(v => v.categoryName === name);
        return {
            categoryNameList:this.data.categoryNameList,
            data:data as CategoryData
        }
    }
    getDataByDefault():{data:CategoryData,categoryNameList:string[]}{
        let data = this.data.Listdata.find(v => v.categoryName === this.data.categoryNameList[0]);
        return {
            categoryNameList:this.data.categoryNameList,
            data:data as CategoryData
        }
    }
}