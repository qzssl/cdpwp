/*头部导航*/
var save = document.getElementById('project-list');
_event('.drop-down','mousemove', function () {
    save.style.display="block";
    var staycolorx=document.getElementById('project');
    staycolorx.style.backgroundPosition=0+"px "+30+"px";
});
_event('.drop-down','mouseout',function () {
    save.style.display="none";
    var staycolorx=document.getElementById('project');
    staycolorx.style.backgroundPosition=0+"px "+0+"px";
});
_event('.jiu-list','mousemove',function (e) {
    var e = e || window.event;
    var oLi = e.srcElement || ev.target;
    oLi.style.background = '#FFAC12'||oLi;
});
_event('.jiu-list','mouseout',function (e) {
    var e = e || window.event;
    var oLi = e.srcElement || ev.target;
    oLi.style.background = 'transparent';
});

//事件封装
function  _event(el,eventName,fn) {
    var item = document.querySelector(el);
    return item.attachEvent ? item.attachEvent('on' + eventName, function(e){
        e.target = e.srcElement;
        fn.call(item, e);
    }) : item.addEventListener(eventName,fn,false)
}

/* 新闻框  */
function turn()
{
    var d=document.getElementById('dong');
    d.style.background='white';
    d.style.borderTop='3px solid #FFAC12';
    d.style.color='#FFAC12';
    var x=document.getElementById('xiang');
    x.style.background='#EFECEC';
    x.style.border='0px';
    x.style.color='#173653';
    var ds=document.getElementById('ds');
    ds.style.display='block';
    var xs=document.getElementById('xs');
    xs.style.display='none';
}
function turn1()
{
    var d=document.getElementById('dong');
    d.style.background='#EFECEC';
    d.style.border='0px';
    d.style.color='black';
    var x=document.getElementById('xiang');
    x.style.background='white';
    x.style.borderTop='3px solid #FFAC12';
    x.style.color='#FFAC12';
    var xs=document.getElementById('xs');
    xs.style.display='block';
    var ds=document.getElementById('ds');
    ds.style.display='none';
}
