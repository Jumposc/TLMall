
export interface ProductDetailData {
    id: string
    carouselUrls: string[];
    productTitle: string;
    subTitle: string;
    amount: number;
    sourceAmount: number;
    seller: string;
    tags: string[];
    deliveryPlace: string;
    isFreeShopping: boolean;
    noReasonDay: number;
    commentList: {
        avatarUrl: string;
        nickName: string;
        starNumber: number;
        text: string;
        tags: string[];
        imgs: string[];
    }[];
    attribute: ProductAttributeData
}

export interface ProductAttributeData {
    productName: string;
    imgUrl: string;
    amount: number;
    attributeList: {
        name: string
        items: string[]
    }[]
}





export class ProductDetailDB {
    private static instance: ProductDetailDB;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductDetailDB;
        }
        return this.instance;
    }
    productDetailData: ProductDetailData[] = [
        {
            id: '1',
            carouselUrls: ["product_details_big.png", "product_details_big_1.png", "product_details_big_2.png", "product_details_big_3.png"],
            productTitle: "承唐宋之风原创三合一熏香炉",
            subTitle: "大师之作 经典传承",
            amount: 1000,
            sourceAmount: 2500,
            seller: "小王",
            tags: ["限时特惠"],
            deliveryPlace: "广东佛山",
            isFreeShopping: true,
            noReasonDay: 7,
            commentList: [
                {
                    avatarUrl: "avatar.png",
                    nickName: "小熊****星",
                    starNumber: 5,
                    text: "很漂亮，反正就是很好，真的很不错，以后还会继续支持，非常满意的一次购物体验",
                    tags: ["质量好", "实图比照片赞", "颜色漂亮", "做工精致", "解答耐心", "服务贴心", "包装精美"],
                    imgs: ["product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png", "product_details_small_photo.png"],
                }
            ],
            attribute: {
                imgUrl: "product_attribute_photo.png",
                amount: 1000,
                productName: "承唐宋之风原创三合一熏香炉",
                attributeList: [
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

    getProductDetailById(id: string):ProductDetailData {
        return this.productDetailData.find((v)=> v.id === id) as ProductDetailData;
    }
    modifyProductDetail(productDetailData:ProductDetailData) {
        let index = this.productDetailData.findIndex(v => v.id === productDetailData.id);
        this.productDetailData[index] = productDetailData;
    }
    deleteProductDetailById(id: string) {
        let index = this.productDetailData.findIndex(v => v.id === id);
        this.productDetailData.splice(index,1);
    }
}