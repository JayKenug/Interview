window.onload = function (){
    var aLi = document.getElementsByClassName("nav");//获取列表
    var i = 0;
    for (i = 0; i < aLi.length; i++){
        aLi[i].onclick = function (){
            for (i = 0; i < aLi.length; i++) 
            //清除全部active
            aLi[i].className = aLi[i].className.replace(/\s?ardent/,"");
            //给点击的元素添加active类
            this.className += " ardent";}
    }};