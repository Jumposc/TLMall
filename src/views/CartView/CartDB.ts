export interface AddressListItem {
    id: string;
    name: string;
    tel: string;
    remarks: string;
    address: string;
    isDefault: boolean;
}

export interface Product {
    id: string;
    img: string;
    name: string;
    property: string;
    price: number;
    amount: number;
    maxAmount: number;
    freight: number,
    isSelected: boolean;
}

export interface MayLikeListItem {
    id: string;
    img: string;
    name: string;
    place: string;
    price: number;
}

export interface VoucherListItem {
    limit: number;
    price: number;
    isSelected: boolean;
}

export interface CouponListItem {
    price: number;
    isSelected: boolean;
}

export interface CartData {
    cartList: Product[]
    mayLikeList: MayLikeListItem[]
    voucherList: VoucherListItem[]
    couponList: CouponListItem[]
    addressList: AddressListItem[]
}

export class CartDB {
    static _cartData: CartDB;
    static getCartDB() {
        if (!this._cartData) {
            this._cartData = new CartDB()
        }
        return this._cartData
    }

    _data: CartData = {
        cartList: [
            
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
    addCartItem(item:Product){
        this._data.cartList.push(item)
    }
}
