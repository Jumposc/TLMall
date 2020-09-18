export interface UserData{
    userAvatar:string,
    usernickName:string,
    userMedal:string,
    userFans:number,
    userFollow:number,
    userLikes:number,
    userCollection:number,
    userCoupon:number,
}

export class UserInformData {

    //单例模式
    private static instance:UserInformData
    static getInstance():UserInformData{
        if(!this.instance){
            this.instance=new UserInformData();
        }
        return this.instance;
    }
    //用户信息列表
    data:UserData[]=[
        {
            userAvatar:'avatar.png',
            usernickName:'别样风格',
            userMedal:'寻宝人',
            userFans:156,
            userFollow:1100,
            userLikes:23000,
            userCollection:45,
            userCoupon:5,
        }
    ]

    getUserData():UserData[]{
        return(this.data)
    }
}