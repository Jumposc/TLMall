export function getNum(nums: number) {
    if (nums>=1&&nums<1000) {
        return nums + "";
    }
    else if(nums>=1000&&nums<10000){
        return Math.floor(nums/100)/10+"K"
    }
    else
      return Math.floor(nums/1000)/10+"W"
}