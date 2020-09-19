export interface JpsdList {
    picture: string,
    content: string,
    nickName: string,
    avatar: string,
    province: string,
    userId: string,
}

export interface JlList {
    picture: string,
    content: string,
    nickName: string,
    avatar: string,
    like: number,
    id: string,
    isLike: boolean,
    isFollow: boolean,
}

export interface SpList {
    picture: string,
    content: string,
    nickName: string,
    avatar: string,
    like: number,
    id: string,
    isLike: boolean,
    isFollow: boolean,
}

export interface FollowList {
    nickName: string,
    avatar: string,
    id: string,
}

export interface UserData {
    nickName: string,
    avatar: string,
    userId: string,
    num: number,
    passWord: number,
    followList: FollowList[],
}

export class DiscoverDb {
    //单例模式
    private static _instance: DiscoverDb;
    static getInstance(): DiscoverDb {
        if (!this._instance) {
            this._instance = new DiscoverDb();
        }
        return this._instance;
    }

    data = {
        userData: [
            {
                nickName: '大王',
                avatar: 'dawang.png',
                userId: 'DW',
                num: 111,
                passWord: 111,
                followList: [
                    { nickName: '大王', avatar: 'dawang.png', userId: 'DW' },
                    { nickName: '小王', avatar: 'xiaowang.png', userId: 'XW' },
                    { nickName: '中王', avatar: 'zhongwang.png', userId: 'ZW' },
                ],
            },
            {
                nickName: '大王',
                avatar: 'dawang.png',
                userId: 'DW',
                num: 222,
                passWord: 222,
                followList: [
                    { nickName: '大王', avatar: 'dawang.png', userId: 'DW' },
                    { nickName: '小王', avatar: 'xiaowang.png', userId: 'XW' },
                    { nickName: '中王', avatar: 'zhongwang.png', userId: 'ZW' },
                ],
            },
            {
                nickName: '大王',
                avatar: 'dawang.png',
                userId: 'DW',
                num: 333,
                passWord: 333,
                followList: [
                    { nickName: '大王', avatar: 'dawang.png', userId: 'DW' },
                    { nickName: '小王', avatar: 'xiaowang.png', userId: 'XW' },
                    { nickName: '中王', avatar: 'zhongwang.png', userId: 'ZW' },
                ],
            },
        ],

        jpsdList: [
            {
                picture: 'picture1.png',
                content: 'aaaaaaaaaaaaaaaa',
                nickName: '大王',
                avatar: 'dawang.png',
                province: '广东',
                userId: 'DW',
            },
            {
                picture: 'picture2.png',
                content: 'bbbbbbbbbbbbbbbb',
                nickName: '小王',
                avatar: 'xiaowang.png',
                province: '北京',
                userId: 'XW',
            },
            {
                picture: 'picture3.png',
                content: 'cccccccccccccccc',
                nickName: '中王',
                avatar: 'zhongwang.png',
                province: '上海',
                userId: 'ZW',
            },
        ],

        jlList: [
            {
                nickName: '大王',
                avatar: 'dawang.png',
                userId: 'DW',
                picture: 'picture4.png',
                content: 'aaaaaaaaaaaaaaaa',
                like: 777,
                isFollow: false,
                isLike: false,
            },
            {
                nickName: '中王',
                avatar: 'zhongwang.png',
                userId: 'ZW',
                picture: 'picture5.png',
                content: 'aaaaaaaaaaaaaaaa',
                like: 788,
                isFollow: false,
                isLike: false,
            },
            {
                nickName: '小王',
                avatar: 'xiaowang.png',
                userId: 'XW',
                picture: 'picture6.png',
                content: 'aaaaaaaaaaaaaaaa',
                like: 888,
                isFollow: false,
                isLike: false,
            },
        ],

        spList: [
            {
                nickName: '大王',
                avatar: 'dawang.png',
                userId: 'DW',
                picture: 'picture7.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 777,
            },
            {
                nickName: '小王',
                avatar: 'xiaowang.png',
                userId: 'XW',
                picture: 'picture8.png',
                content: 'aaaaaaaaaaaaaaaa',
                isFollow: false,
                isLike: false,
                like: 888,
            },
        ],
    }

    //获取用户账号密码
    getLoginData() {
        let num = this.data.userData.find(v=>v.num);
        let passWord = this.data.userData.find(v=>v.passWord);
        return 
    }
    //获取精品晒单列表
    getJpsdList() {
        let jpsdList = this.data.jpsdList;
        return jpsdList
    }
    //获取关注列表
    getFollowList(userId) {
        return this.data.userData.find(v => v.userId === userId).followList;
    }

    //判断是否关注
    isFollow(followList, userId) {
        return followList.find(v => v.userId === userId) ? true : false;
    }

    //获取交流列表
    getJlList(userId) {
        //查找用户的关注列表
        let followList = this.getFollowList(userId);
        //获取交流列表
        let jlList = this.data.jlList;
        //遍历查看每一项交流列表里面用户是否被关注
        jlList.forEach((v) => {
            v.isFollow = this.isFollow(followList, v.userId)
        });
        return jlList
    }

    //交流列表数据更新关注列表
    upDateFollowByJl(userId, followList) {
        //获取交流列表
        let JlList = this.getJlList(userId);
        //通过userId获取交流列表中关注用户的数据
        let followUser = this.data.jlList.find(v => { v.userId === userId });
        //通过userId获取登入用户
        let mine = this.data.userData.find(v => { v.userId === userId })
        //增加/删除关注
        JlList.find(v => v.isFollow === false)
            ? this.addFollow({
                nickname: followUser.nickName,
                avatar: followUser.avatar,
                userId: followUser.userId,
            }, mine)
            : this.delFollow(followList, userId);
    }

    //获取视频列表
    getSpList(userId) {
        //查找用户的关注列表
        let followList = this.getFollowList(userId);
        //获取交流列表
        let spList = this.data.jlList;
        //遍历查看每一项交流列表里面用户是否被关注
        spList.forEach((v) => {
            v.isFollow = this.isFollow(followList, v.userId)
        });
        return spList
    }

    //视频列表数据更新关注列表
    upDateFollowBySp(userId, followList) {
        //获取交流列表
        let spList = this.getSpList(userId);
        //通过userId获取交流列表中关注用户的数据
        let followUser = this.data.spList.find(v => { v.userId === userId });
        //通过userId获取登入用户
        let mine = this.data.userData.find(v => { v.userId === userId })
        //增加/删除关注
        spList.find(v => v.isFollow === false)
            ? this.addFollow({
                nickname: followUser.nickName,
                avatar: followUser.avatar,
                userId: followUser.userId,
            }, mine)
            : this.delFollow(followList, userId);
    }

    //添加关注列表关注
    addFollow(followUser, userData) {
        //将数据推入关注列表
        userData.followList.push(followUser)
    }

    //删除关注列表关注
    delFollow(followList, userId) {
        //获取关注列表用户index
        let index = followList.findIndex(v => v.userId === userId);
        //从关注列表删除对应用户数据
        followList.splice(index, 1);
    }

}