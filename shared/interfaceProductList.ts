export interface RequestProductList {
    page:number;
    pageSize:number;
    productName?: string;
    orderRule: 'recommend' | 'latest' | 'mayLike'
    sortRule: {
        date:string,
        price:number,
        place:string 
    }

}

export interface ResposeProductList {
    ProductList: {
        id: string;
        img: string;
        name: string;
        place: string;
        price: number;
    }[]
}