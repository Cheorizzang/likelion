let 인세규정 = {
    책:10,
    영상콘텐츠:50
}

function 인세계산함수(e){
    return e *(this.책/100)
}

[100, 200, 300].map(인세계산함수, 인세규정)
// map(콜백함수, this로 들어갈 값)