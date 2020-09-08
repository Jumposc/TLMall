import { OrderListData } from '../MineAllOrderView';


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
    data={
        orderStatuslist: ['全部','代付款','待收货','待发货','待评价'],
        listData:[
            {
                id:1,
                statusName:'全部',
                goodsList: [
                    {
                        name:'全部',
                        goodsData:[
                            {
                                id:1,
                                busniessTargetImg:'busniesstarget.png',
                                busniessTargetName:'莫源',
                                busniessTargetStatus:'交易成功',
                                goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                                goodsImg:'goodsphoto1.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                            {
                                id:2,
                                busniessTargetImg:'businesstarget2.png',
                                busniessTargetName:'陈思',
                                busniessTargetStatus:'交易成功',
                                goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                                goodsImg:'goodsphoto2.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                        ],

                    },
                ],
            },
            {
                id:2,
                statusName:'代付款',
                goodsList: [
                    {
                        name:'代付款',
                        goodsData:[
                            {
                                id:1,
                                busniessTargetImg:'busniesstarget.png',
                                busniessTargetName:'莫源',
                                busniessTargetStatus:'交易成功',
                                goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                                goodsImg:'goodsphoto1.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                        ],

                    },
                ],
            },
            {
                id:3,
                statusName:'待收货',
                goodsList: [
                    {
                        name:'待收货',
                        goodsData:[
                            {
                                id:2,
                                busniessTargetImg:'businesstarget2.png',
                                busniessTargetName:'陈思',
                                busniessTargetStatus:'交易成功',
                                goodsName:'陈思|景德镇原创国家非遗产手艺陶瓷杯子三件套',
                                goodsImg:'goodsphoto2.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                        ],

                    },
                ],
            },
            {
                id:4,
                statusName:'待发货',
                goodsList: [
                    {
                        name:'待发货',
                        goodsData:[
                            {
                                id:1,
                                busniessTargetImg:'busniesstarget.png',
                                busniessTargetName:'莫源',
                                busniessTargetStatus:'交易成功',
                                goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                                goodsImg:'goodsphoto1.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                        ],

                    },
                ],
            },
            {
                id:5,
                statusName:'待评价',
                goodsList: [
                    {
                        name:'待评价',
                        goodsData:[
                            {
                                id:2,
                                busniessTargetImg:'busniesstarget.png',
                                busniessTargetName:'莫源',
                                busniessTargetStatus:'交易成功',
                                goodsName:'莫源|独立设计.鼻烟壶套装加送盒子',
                                goodsImg:'goodsphoto1.png',
                                goodsStyleChoice:'蓝绿色',
                                goodsNum:1,
                                goodsAccountItem:'.总价￥2300.优惠100.实付款',
                                goodsAllAccount:'2200',
                            },
                        ],

                    },
                ],
            },
        ]
     }

    //用名字获取数据
    getDataByName(name:string):{data:OrderListData,orderStatuslist:string[]} {
        let data = this.data.listData.find(v => v.statusName === name);
        return {
            orderStatuslist:this.data.orderStatuslist,
            data:data as OrderListData
        }
    }
    getDataByStatusList():{data:OrderListData,orderStatuslist:string[]}{
        let data = this.data.listData.find(v => v.statusName === this.data.orderStatuslist[0]);
        return {
            orderStatuslist:this.data.orderStatuslist,
            data:data as OrderListData
        }
    }
}