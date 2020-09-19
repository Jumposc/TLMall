export interface ProductSimpleInfo {
    id: string,
    name: string,
    imageUrl: string
}

export interface ProductDetail {
    id: string,
    name: string,
    imageUrl: string,
    detail: {
        images: string[],
        desc: string,
    }
}

// 商品展示类信息获取
export class ProductUtil {

    /** 获取商品分类 */
    static getCategories(): Promise<{ id: string, name: string }[]> {
        throw new Error('TODO');
    }

    /** 获取分类的商品列表 */
    static getCategoryProducts(categoryId: string, size: number, lastItemId?: string): Promise<ProductSimpleInfo[]> {
        throw new Error('TODO');
    }

    /** 获取单个商品的信息 */
    static getProductDetail(productId: string): Promise<ProductDetail> {
        throw new Error('TODO');
    }

    /** 获取商品评价 */
    static getProductComment(productId: string, size: number, lastItemId?: string) {
        throw new Error('TODO');
    }

    static collect(productId: string): Promise<void>{
        throw new Error('TODO');
    }

}