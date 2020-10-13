/** 商品摘要 */
export interface ProductSimpleInfo {
    id: string,
    name: string,
    imageUrl: string
}
/** 商品数据 */
export interface ProductData {
    id: string
    name: string,
    imageUrl: string,
    detail: ProductDetail,
    attribute: ProductAttributeData
}
/** 商品详细描述 */
export interface ProductDetail {
    imageUrls: string[];
    productTitle: string;
    subTitle: string;
    price: number;
    originalPrice: number;
    seller: string;
    tags: string[];
    deliveryPlace: string;
    freight: number;
    noReasonDay: number;
    maxAmount: number
}
/** 商品属性 */
export interface ProductAttributeData {
    name: string;
    imgUrl: string;
    price: number;
    list: {
        name: string
        items: string[]
    }[]
}


/** 评论列表 */
export interface ProductCommentItem {
    productId: string
    avatarUrl: string;
    nickName: string;
    starNumber: number;
    text: string;
    tags: string[];
    imgs: string[];
}

/** 分类列表 */
export interface ProductCategory {
    id: string
    categoryName: string
    adUrl: string    //广告地址
    hotCategoryList: ProductSimpleInfo[] //快速索引的列表
    smallCategoryList: {      //小分类列表
        name: string
        products: ProductSimpleInfo[]
    }[]
}