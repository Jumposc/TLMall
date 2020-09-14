import { AddressListItem } from '../AddressView/AddressView';
import { Product } from './CartView'

export class CartDB {
    static _cartData: CartDB;
    static getCartDB() {
        if (!this._cartData) {
            this._cartData = new CartDB()
        }
        return this._cartData
    }

    _data = {
        cartList: [
            {
                id: "11",
                img: "/src/views/CartView/assets/cart_goods photo.png",
                name: "莫源 | 独自设计·鼻烟壶套装加送盒子",
                property: "绿色",
                price: 1000,
                amount: 5,
                freight: 5,
                maxAmount: 10,
                isSelected: true,
            },
            {
                id: "22",
                img: "/src/views/CartView/assets/cart_goods photo1.png",
                name: "独自设计·鼻烟壶套装加送盒子",
                property: "绿色",
                price: 500,
                freight: 0,
                amount: 6,
                maxAmount: 10,
                isSelected: false,
            },
            {
                id: "33",
                img: "/src/views/CartView/assets/cart_goods photo1.png",
                name: "·鼻烟壶套装加送盒子",
                property: "绿色",
                price: 700,
                freight: 20,
                amount: 2,
                maxAmount: 10,
                isSelected: true,
            },
            {
                id: "44",
                img: "/src/views/CartView/assets/cart_goods photo1.png",
                name: "莫源 | 鼻烟壶套装加送盒子",
                property: "绿色",
                price: 200,
                freight: 0,
                amount: 7,
                maxAmount: 10,
                isSelected: true,
            },
        ],
        mayLikeList: [
            {
                id: "111",
                img: "/src/views/CartView/assets/cart_may like photo.png",
                name: "慢生活 | 铜制口红外壳，手工雕刻",
                price: 588,
                place: "杭州",
            },
        ],
        voucherList: [
            {
                limit: 200,
                price: 20,
                isSelected: true,
            },
        ],
        couponList: [
            {
                price: 20,
                isSelected: false,
            },
        ],
        addressList: [
            {
                id: "11",
                name: "李小姐",
                tel: "13xxxxxxxxx",
                remarks: "公司",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                id: "22",
                name: "王先生",
                tel: "13xxxxxxxxx",
                remarks: "学校",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: true,
            },
            {
                id: "33",
                name: "林设计",
                tel: "13xxxxxxxxx",
                remarks: "家",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                id: "44",
                name: "张先生",
                tel: "13xxxxxxxxx",
                remarks: "饭堂",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
            {
                id: "55",
                name: "罗管理",
                tel: "13xxxxxxxxx",
                remarks: "店铺",
                address: "xxx xxx xxx xxxxxxxxx",
                isDefault: false,
            },
        ],
    }

    getCartData() {
        return ({
            cartList: this._data.cartList,
            mayLikeList: this._data.mayLikeList
        })
    }

    updataCartProduct(v: Product) {
        let product = this._data.cartList.find((value) => value.id === v.id)
        if (!product) {
            return ({ status: 201 })
        }
        product.amount = v.amount
        return ({ status: 200 })
    }

    updataAllCartProductSelected(status: boolean) {
        this._data.cartList.forEach((v) => {
            v.isSelected = status
        });
        return ({ status: 200 })
    }

    getOrderData() {
        return ({
            orderList: this._data.cartList.filter(v => (v.isSelected === true)),
            voucherList: this._data.voucherList,
            couponList: this._data.cartList,
            buyerAddress: this._data.addressList.find(v => (v.isDefault === true))
        })
    }

    getAdderssData() {
        return ({
            addressList: this._data.addressList,
        })
    }

    selectDefaultAddress(v: AddressListItem) {
        this._data.addressList.forEach(values => { values.isDefault = false })
        let address = this._data.addressList.find(value => value.id === v.id)
        if (!address) {
            return ({ status: 201 })
        }
        address.isDefault = true
        return ({ status: 200 })
    }

    delAddressById(id: string) {
        let index = this._data.addressList.findIndex(v => (v.id === id))
        if (index === -1) {
            return ({ status: 201 })
        }
        this._data.addressList.splice(index, 1)
        return ({ status: 200 })
    }

}
