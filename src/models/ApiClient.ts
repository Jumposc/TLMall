import { ReqGetCartList, ResGetCartList } from '../../shared/Cart/ApiGetCartList';
import { ReqUpdateCartList, ResUpdateCartList } from '../../shared/Cart/ApiUpdateCartList';
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

class ApiClient {
    /** 发现 */
    
    //获取发现列表
    static async postApi(url: '/discover/getContentList', req: ReqGetDiscoverContentList): Promise<ResGetDiscoverContentList>
    /** END 发现 */

    /** 订单 */

    //添加订单
    static async postApi(url: '/order/add', req: ReqAddOrder): Promise<ResAddOrder>
    //添加评论
    static async postApi(url: '/order/addComment', req: ReqAddOrderComment): Promise<ResAddOrderComment>
    //取消订单
    static async postApi(url: '/order/cancel', req: ReqCancelOrder): Promise<ResCancelOrder>
    //确认订单
    static async postApi(url: '/order/confirmOrder', req: ReqConfirmOrder): Promise<ResConfirmOrder>
    //获取订单列表
    static async postApi(url: '/order/getList', req: ReqGetOrderList): Promise<ResGetOrderList>
    //支付订单
    static async postApi(url: '/order/pay', req: ReqPayOrder): Promise<ResPayOrder>
    /** END 订单 */ 

    /** 购物车 */

    //更新购物车
    static async postApi(url: '/cart/update', req: ReqUpdateCartList): Promise<ResUpdateCartList>
    //获取购物车列表
    static async postApi(url: '/cart/getList', req: ReqGetCartList): Promise<ResGetCartList>
    /** END 购物车 */

    /** 商品 */

    //添加商品
    static async postApi(url: '/product/add', req: ReqAddProduct): Promise<ResAddProduct>
    // 添加收藏
    static async postApi(url: '/product/addCollect', req: ReqAddProductCollect): Promise<ResAddProductCollect>
    //获取单个商品
    static async postApi(url: '/product/getOne', req: ReqGetProductOne): Promise<ResGetProductOne>
    //获取商品列表
    static async postApi(url: '/product/getList', req: ReqGetProductList): Promise<ResGetProductList>
    //获取商品的简易信息
    static async postApi(url: '/product/getSimpleinfos', req: ReqGetProductSimpleInfos): Promise<ResGetProductSimpleInfos>
    //获取商品评论
    static async postApi(url: '/product/getCommentList', req: ReqGetProductCommentList): Promise<ResGetProductCommentList>
    //获取分类列表
    static async postApi(url: '/product/getCategorieList', req: ReqGetCategorieList): Promise<ResGetCategorieList>
    //获取分类中的商品列表
    static async postApi(url: '/product/getCategorieProduct', req: ReqGetCategoryProduct): Promise<ResGetCategoryProduct>
    /** END商品 */

    /** 用户 */

    //登录
    static async postApi(url: '/login', req: ReqLogin): Promise<ResLogin>
    //注册
    static async postApi(url: '/register', req: ReqRegister): Promise<ResRegister>
    //获取用户收藏关注等数据
    static async postApi(url: '/user/getStat', req: ReqGetUserStat): Promise<ResGetUserStat>
    /** END 用户 */

    //基础
    static async postApi(url: string, req: any): Promise<any> {
        req.token = Global.token;
        let res = await fetch(Global.url+url,{
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(req)
        })
        .then(v => v.json())
        .catch(() => {
            return {
                isSucc:false,
                errMsg:'网络错误,请重试'
            }
        })
        return res
    }
}