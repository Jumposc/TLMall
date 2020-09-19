export interface DiscoverContentItem {
    id: string,
    content: string,
    imageUrl: string,
    creator: {
        uid: string,
        nickName: string,
        avatar: string
    },
    likedUids: string[]
}

export interface DisplayContentItem extends DiscoverContentItem {
    isFollowed: boolean;
}

// 发现
export class DiscoverUtil {

    static getDisplayContentList(category: string, size: number, lastItemId?: string): Promise<DisplayContentItem[]> {
        throw new Error('TODO')
    }

}