var items = document.getElementsByClassName('item');//图片
var points = document.getElementsByClassName('point');//点
var pointList = document.getElementsByClassName('pointList');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');

var index = 0;//第index张图片和点获取active这个类名并展示

var clearActive = function(){
    for(var i = 0; i < items.length; i++){
        items[i].className = 'item';
    }
    for(var i = 0; i < points.length; i++){
        points[i].className = 'point';
    }
}

var goIndex = function(){
    clearActive();
    points[index].className = 'point active'
    items[index].className = 'item active';
}

var goNext = function(){
    if(index < 4){
        index++;
    } else{
        index = 0;
    }
    goIndex();
}

var goPre = function(){
    if(index == 0){
        index = 4;
    } else{
        index --;
    }
    goIndex();
}

goNextBtn.addEventListener('click',function(){
    goNext();
})
goPreBtn.addEventListener('click',function(){
    goPre();
})

for (var i = 0; i < points.length; i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index');
        console.log(pointIndex)
        index = pointIndex;
        goIndex();
    })
}
    //自动点击goNext实现自动播放
    var timer = null;
    function autoPlay () {
        timer = setInterval(function () {
            goNext();
        },2000);
    }
    autoPlay();

    var wrap = document.querySelector(".wrap");
    // 鼠标进入清除timer
    wrap.onmouseenter = function () {
        clearInterval(timer);
    }
    // 鼠标移出启动autoPlay
    wrap.onmouseleave = function () {
        autoPlay();    
    }