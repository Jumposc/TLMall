import { ProductData, ProductSimpleInfo, ProductCommentItem, ProductCategory } from '../../shared/Product/Product';


// 商品展示类信息获取
export class ProductUtil {


    /** 获取商品分类 */
    static async getCategories(): Promise<{ id: string, name: string }[]> {
        return categoryList.map(v => ({ id: v.id, name: v.categoryName }))
    }

    /** 获取分类的商品列表 */
    static async getCategoryProduct(categoryId: string): Promise<ProductCategory> {
        let categoryProduct = categoryList.find(v => v.id === categoryId);
        if (categoryProduct) {
            return categoryProduct
        }
        else {
            throw new Error("没有该商品分类")
        }
    }

    /** 获取单个商品的信息 */
    static async getProduct(productId: string): Promise<ProductData> {
        let product = products.find(v => v.id === productId)
        if (product) {
            return product
        }
        else {
            throw new Error('没有该商品');
        }

    }

    /** 获取购物车商品信息 */
    static async getProducts(productIds: string[]): Promise<(ProductData | undefined)[]> {
        let res = productIds.map(id => {
            return products.find(v => v.id === id)
        })
        return res

    }

    /** 查询单个商品的简单信息 */
    static async getProductSimpleInfo(productId: string): Promise<ProductSimpleInfo> {
        let product = products.find(v => v.id === productId);
        if (product) {
            return {
                id: product.id,
                name: product.name,
                imageUrl: product.imageUrl
            }
        }
        else {
            throw new Error('没有该商品');
        }
    }

    /** 查询多个商品的简单信息 */
    static async getProductSimpleInfos(productIds: string[]): Promise<(ProductSimpleInfo | undefined)[]> {
        let res = productIds.map(id => {
            return products.find(v => v.id === id)
        })
        return res
    }

    /** 获取商品评价 */
    static async getProductComment(productId: string, size: number, lastItemId?: string): Promise<ProductCommentItem[]> {
        let comments = commentList.filter(v => v.productId === productId);
        if (lastItemId) {
            let lastIndex = comments.findIndex(v => v.productId === lastItemId)
            if (lastIndex) {
                return comments.slice(lastIndex + 1, lastIndex + size)
            } else {
                throw new Error("lastId错误")
            }
        }
        return comments.slice(0, size);
    }

    /** 添加到收藏 */
    static setProductCollect(productId: string): Promise<void> {
        collectList.push({ productId: productId, userId: '1' })
        throw new Error('TODO');
    }

}

let categoryList: ProductCategory[] =
    [
        {
            id: "1",
            categoryName: "首饰",
            adUrl: "top_ad.png",
            hotCategoryList: [
                {
                    id: '1',
                    name: "戒指",
                    imageUrl: 'classification_fanshion goods.png'
                },
                {
                    id: '2',
                    name: "吊坠",
                    imageUrl: 'classification_ retro product.png'
                }
            ],
            smallCategoryList: [
                {
                    name: "时尚",
                    products: [
                        {
                            id: '1',
                            name: "戒指",
                            imageUrl: 'classification_fanshion goods.png'
                        },
                        {
                            id: '2',
                            name: "吊坠",
                            imageUrl: 'classification_ retro product.png'
                        }
                    ],
                },
                {
                    name: "复古",
                    products: [
                        {
                            id: '4',
                            name: "发簪",
                            imageUrl: 'classification_fanshion goods photo2@2x.png'
                        },
                        {
                            id: '5',
                            name: "首饰",
                            imageUrl: 'classification_fanshion goods photo3@2x.png'
                        }
                    ],
                },
            ]
        }
    ]

let products: ProductData[] = [
    {
        id: '1',
        name: "承唐宋之风原创三合一熏香炉",
        imageUrl: 'product_attribute_photo.png',
        detail: {
            imageUrls: ["product_details_big.png", "product_details_big_1.png", "product_details_big_2.png", "product_details_big_3.png"],
            productTitle: "承唐宋之风原创三合一熏香炉",
            subTitle: "大师之作 经典传承",
            price: 1000,
            originalPrice: 2500,
            seller: "小王",
            tags: ["限时特惠"],
            deliveryPlace: "广东佛山",
            freight: 0,
            noReasonDay: 7,
            maxAmount: 0
        },
        attribute: {
            imgUrl: "product_attribute_photo.png",
            price: 1000,
            name: "承唐宋之风原创三合一熏香炉",
            list: [
                {
                    name: "颜色",
                    items: ["蓝色", "绿色", "青色"]
                },
                {
                    name: "分类",
                    items: ["豪华包装", "简易包装"]
                },
                {
                    name: "套餐",
                    items: ["豪华套餐", "精简套餐"]
                },
            ]
        }
    },
    {
        id: '2',
        name: "一熏香炉",
        imageUrl: 'product_attribute_photo.png',
        detail: {
            imageUrls: ["product_details_big.png", "product_details_big_1.png", "product_details_big_2.png", "product_details_big_3.png"],
            productTitle: "承唐宋之风原创三合一熏香炉",
            subTitle: "大师之作 经典传承",
            price: 9000,
            originalPrice: 2500,
            seller: "小王",
            tags: ["限时特惠"],
            deliveryPlace: "广东佛山",
            freight: 0,
            noReasonDay: 7,
            maxAmount: 0

        },
        attribute: {
            imgUrl: "product_attribute_photo.png",
            price: 5000,
            name: "承唐宋之风原创三合一熏香炉",
            list: [
                {
                    name: "颜色",
                    items: ["蓝色", "绿色", "青色"]
                },
                {
                    name: "分类",
                    items: ["豪华包装", "简易包装"]
                },
                {
                    name: "套餐",
                    items: ["豪华套餐", "精简套餐"]
                },
            ]
        }
    }
]

let commentList: ProductCommentItem[] =
    [
        {
            productId: '1',
            avatarUrl: "avatar.png",
            nickName: "小熊****星",
            starNumber: 5,
            text: "很漂亮，反正就是很好，真的很不错，以后还会继续支持，非常满意的一次购物体验",
            tags: ["质量好", "实图比照片赞", "颜色漂亮", "做工精致", "解答耐心", "服务贴心", "包装精美"],
            imgs: ["product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png"],
        },
        {
            productId: "1",
            avatarUrl: "avatar.png",
            nickName: "小熊****星",
            starNumber: 5,
            text: "很漂亮，反正就是很好，真的很不错，以后还会继续支持，非常满意的一次购物体验",
            tags: ["质量好", "实图比照片赞", "颜色漂亮", "做工精致", "解答耐心", "服务贴心", "包装精美"],
            imgs: ["product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png"],
        }
    ]

let collectList = [

]
