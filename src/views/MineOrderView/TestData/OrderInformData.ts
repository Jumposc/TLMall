
export interface OrderListData {
    id:number,
    orderStatus:string,
    orderList:GoodsListItemData[],
}
export interface GoodsListItemData {
    sellerImg:string
    sellerName:string
    businessStatus:string
    goodsName:string
    goodsImg:string
    goodsStyleChoice:string
    goodsNum:number
    goodsAccountItem:string
    goodsAllAccount:string 
}

export class OrderInformData {

    //单例模式
    private static instance:OrderInformData
    static getInstance():OrderInformData{
        if(!this.instance){
            this.instance=new OrderInformData();
        }
        return this.instance;
    }
    //商品列表模块
    data: OrderListData[]= [
        {
            id:0,
            orderStatus:"全部",
            orderList:[
                {
                    sellerImg:'sallerImg.png',
                    sellerName:'莫源',
                    businessStatus:'交易成功',
                    goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                    goodsImg:'goodsphoto1.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                    
                },
                {

                    sellerImg:'sallerImg2.png',
                    sellerName:'陈思',
                    businessStatus:'交易成功',
                    goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                    goodsImg:'goodsphoto2.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                },
            ]
        },
        {
            id:1,
            orderStatus:"待付款",
            orderList:[
                {
                    sellerImg:'sallerImg.png',
                    sellerName:'莫源',
                    businessStatus:'交易成功',
                    goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                    goodsImg:'goodsphoto1.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                },
            ]
        }, 
        {
            id:2,
            orderStatus:"待发货",
            orderList:[
                {
                    sellerImg:'sallerImg2.png',
                    sellerName:'陈思',
                    businessStatus:'交易成功',
                    goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                    goodsImg:'goodsphoto2.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                    
                },
            ]
        }, 
        {
            id:3,
            orderStatus:"待收货",
            orderList:[
                {
                    sellerImg:'sallerImg2.png',
                    sellerName:'陈思',
                    businessStatus:'交易成功',
                    goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                    goodsImg:'goodsphoto2.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                    
                },
            ]
        },
        {
            id:4,
            orderStatus:"待评价",
            orderList:[
                {
                    sellerImg:'sallerImg2.png',
                    sellerName:'陈思',
                    businessStatus:'交易成功',
                    goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                    goodsImg:'goodsphoto2.png',
                    goodsStyleChoice:'蓝绿色',
                    goodsNum:1,
                    goodsAccountItem:'·总价￥2300 ·优惠￥100 ·实付款',
                    goodsAllAccount:'2200',
                },
            ]
        },
    ]

    getData():OrderListData[]{
        return(
this.data)
    }

}