// 605. Can Place Flowers

var canPlaceFlowers = function(flowerbed, n){
    for(let i=0; i < flowerbed.length; i++){
        if(n==0){
            return true;
        }
        let prev = i > 0 ? flowerbed[i-1] : 0  // 만약 i가 0보다 크면, 이전 꽃밭의 값(flowerbed[i - 1])을 prev에 할당
        let next = i < flowerbed.length-1 ? flowerbed[i+1] : 0 // i가 마지막 인덱스보다 작다면, 아직 다음 요소가 있다

        if(prev != 1 && next != 1 && flowerbed[i] != 1){
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0
}

flowerbed = [1,0,0,0,1]
n = 1

console.log(canPlaceFlowers(flowerbed,n))