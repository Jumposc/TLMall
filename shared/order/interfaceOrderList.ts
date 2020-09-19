export interface RequestOrderList {
    token: string;
}

export interface ResponseCartList {
    orderList:{
        //1待付款,2待发货,3待收货,4晒单,5退款，售后
        status:number 
        
    }
}