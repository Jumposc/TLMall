export interface RequestUser{
    token:string;
}

export interface ResposeUser{
    userId:number;
    nickName:string;
    userAvatarUrl:string;
    tag:string[];
}