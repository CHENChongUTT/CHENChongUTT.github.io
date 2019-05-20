function hasClass(obj,cn){//判断该obj的className中有没有cn
    var reg = new RegExp("\\b"+cn+"\\b");//正则表达式
    return reg.test(obj.className);
}
function addClass(obj,cn){//若obj的className中没有cn,则在它的className加上cn
    if (!hasClass(obj,cn)){
      obj.className += cn;
    }
}
function removeClass(obj,cn){//去掉cn
    if (hasClass(obj,cn)){
        var reg = new RegExp("\\b"+cn+"\\b");
        obj.className = obj.className.replace(reg,"");
    }
}
//通过判断className判断是否要隐藏哪些table，要显示哪些table
window.onload=function(){
    var lis = document.getElementsByTagName("li");
    var tabs = document.getElementsByTagName("table");
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                removeClass(lis[j],"current");
            }
            addClass(this,"current");
            for(var k=1; k<tabs.length;k++){//k从1开始是为了不影响到第一个 关于用户信息的table
                addClass(tabs[k],"cache");
            }
            removeClass(tabs[this.index + 1],"cache");
        };
    }
};
