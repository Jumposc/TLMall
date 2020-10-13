export interface UserItem {
    uid: string,
    username: string,
    password: string,
    nickName: string,
    avatar: string,
    followedUids: string[]
}
export interface UserStat {
    fansNum: number,
    followedNum: number,
    discoverLikeNum: number,
    productCollectNum: number,
    couponNum: number
}