import { ReqGetCartList, ResGetCartList } from '../../shared/Cart/ApiGetCartList';
import { ReqSetCartList, ResSetCartList } from '../../shared/Cart/ApiSetCartList';
import { ReqGetDiscoverContentList, ResGetDiscoverContentList } from '../../shared/Discover/ApiGetDiscoverContentList';
import { ReqAddOrder, ResAddOrder } from '../../shared/Order/ApiAddOrder';
import { ReqAddOrderComment, ResAddOrderComment } from '../../shared/Order/ApiAddOrderComment';
import { ReqCancelOrder, ResCancelOrder } from '../../shared/Order/ApiCancelOrder';
import { ReqConfirmOrder, ResConfirmOrder } from '../../shared/Order/ApiConfirmOrder';
import { ReqGetOrderList, ResGetOrderList } from '../../shared/Order/ApiGetOrderList';
import { ReqPayOrder, ResPayOrder } from '../../shared/Order/ApiPayOrder';
import { ReqAddProduct, ResAddProduct } from '../../shared/Product/ApiAddProduct';
import { ReqAddProductCollect, ResAddProductCollect } from '../../shared/Product/ApiAddProductCollect';
import { ReqGetCategorieList, ResGetCategorieList } from '../../shared/Product/ApiGetCategorieList';
import { ReqGetCategoryProduct, ResGetCategoryProduct } from '../../shared/Product/ApiGetCategoryProduct';
import { ReqGetProductCommentList, ResGetProductCommentList } from '../../shared/Product/ApiGetProductCommentList';
import { ReqGetProductList, ResGetProductList } from '../../shared/Product/ApiGetProductList';
import { ReqGetProductOne, ResGetProductOne } from '../../shared/Product/ApiGetProductOne';
import { ReqGetProductSimpleInfos, ResGetProductSimpleInfos } from '../../shared/Product/ApiGetProductSimpleInfos';
import { ReqGetUserStat, ResGetUserStat } from '../../shared/User/ApiGetUserStat';
import { ReqLogin, ResLogin } from "../../shared/User/ApiLogin";
import { ReqRegister, ResRegister } from '../../shared/User/ApiRegister';
import { Global } from './Global';

export class ApiClient {
    /** 用户 */

    //登录
    static async postApi(url: '/login', req:ApiReq<ReqLogin>): Promise<ApiRes<ResLogin>>
    //注册
    static async postApi(url: '/register', req: ApiReq<ReqRegister>): Promise<ApiRes<ResRegister>>
    //获取用户收藏关注等数据
    static async postApi(url: '/user/getStat', req: ApiReq<ReqGetUserStat>): Promise<ApiRes<ResGetUserStat>>
    /** END 用户 */

    /** 发现 */

    //获取发现列表
    static async postApi(url: '/discover/getContentList', req: ApiReq<ReqGetDiscoverContentList>): Promise<ApiRes<ResGetDiscoverContentList>>
    /** END 发现 */

    /** 订单 */

    //添加订单
    static async postApi(url: '/order/add', req: ApiReq<ReqAddOrder>): Promise<ApiRes<ResAddOrder>>
    //添加评论
    static async postApi(url: '/order/addComment', req: ApiReq<ReqAddOrderComment>): Promise<ApiRes<ResAddOrderComment>>
    //取消订单
    static async postApi(url: '/order/cancel', req: ApiReq<ReqCancelOrder>): Promise<ApiRes<ResCancelOrder>>
    //确认订单
    static async postApi(url: '/order/confirmOrder', req: ApiReq<ReqConfirmOrder>): Promise<ApiRes<ResConfirmOrder>>
    //获取订单列表
    static async postApi(url: '/order/getList', req: ApiReq<ReqGetOrderList>): Promise<ApiRes<ResGetOrderList>>
    //支付订单
    static async postApi(url: '/order/pay', req: ApiReq<ReqPayOrder>): Promise<ApiRes<ResPayOrder>>
    /** END 订单 */

    /** 购物车 */

    //更新购物车
    static async postApi(url: '/cart/Set', req: ApiReq<ReqSetCartList>): Promise<ApiRes<ResSetCartList>>
    //获取购物车列表
    static async postApi(url: '/cart/getList', req: ApiReq<ReqGetCartList>): Promise<ApiRes<ResGetCartList>>
    /** END 购物车 */

    /** 商品 */

    //添加商品
    static async postApi(url: '/product/add', req: ApiReq<ReqAddProduct>): Promise<ApiRes<ResAddProduct>>
    // 添加收藏
    static async postApi(url: '/product/addCollect', req: ApiReq<ReqAddProductCollect>): Promise<ApiRes<ResAddProductCollect>>
    //获取单个商品
    static async postApi(url: '/product/getOne', req: ApiReq<ReqGetProductOne>): Promise<ApiRes<ResGetProductOne>>
    //获取商品列表
    static async postApi(url: '/product/getList', req: ApiReq<ReqGetProductList>): Promise<ApiRes<ResGetProductList>>
    //获取商品的简易信息
    static async postApi(url: '/product/getSimpleinfos', req: ApiReq<ReqGetProductSimpleInfos>): Promise<ApiRes<ResGetProductSimpleInfos>>
    //获取商品评论
    static async postApi(url: '/product/getCommentList', req: ApiReq<ReqGetProductCommentList>): Promise<ApiRes<ResGetProductCommentList>>
    //获取分类列表
    static async postApi(url: '/product/getCategorieList', req: ApiReq<ReqGetCategorieList>): Promise<ApiRes<ResGetCategorieList>>
    //获取分类中的商品列表
    static async postApi(url:'/product/getCategorieProduct', req: ApiReq<ReqGetCategoryProduct>): Promise<ApiRes<ResGetCategoryProduct>>

    /** 基础 */
    
    static async postApi(url: string, req: any): Promise<ApiRes<any>> {
        req.token = Global.token;
        let res = await fetch(Global.url + url, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
        })
            .then(v => v.json())
            .catch(() => {
                return {
                    isSucc: false,
                    errMsg: '网络错误,请重试'
                }
            })
        return res
    }
    




}