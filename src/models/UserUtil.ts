/** 数据库存储的用户数据 */
export interface UserItem {
    uid: string,
    username: string,
    password: string,
    nickName: string,
    avatar: string,
    followedUids: string[]
}

/** 前端已登录的用户信息 */
export interface CurrentUser {
    uid: string,
    nickName: string,
    avatar: string
}

export interface UserStat {
    fansNum: number,
    followedNum: number,
    discoverLikeNum: number,
    productCollectNum: number,
    couponNum: number
}

export class UserUtil {

    /** 当前已登录的用户，为undefined则为未登录 */
    static currentUser?: CurrentUser;

    /** 密码登入 */
    static login(username: string, password: string): Promise<CurrentUser> {
        throw new Error('TODO')
    }

    /** 登出 */
    static logout(): Promise<void> {
        throw new Error('TODO')
    }

    //#region Follow
    static setFollowState(isFollowed: boolean, uid: string): Promise<void> {
        throw new Error('TODO')
    }
    static getFollowList(): Promise<{ uid: string, nickName: string, avatar: string }[]> {
        throw new Error('TODO')
    }
    //#endregion

    static getUserStat(): Promise<UserStat> {
        throw new Error('TODO')
    }

}