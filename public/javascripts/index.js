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
})

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
    var Turn=document.getElementById('dong');
    Turn.style.background='white';
    Turn.style.borderTop='3px solid #FFAC12';
    Turn.style.color='#FFAC12';
    /*var play=document.getElementById('ds');
    play.style.background='#C8BFE7';*/
    var changem=document.getElementById('xiang');
    changem.style.background='#EFECEC';
    changem.style.border='0px';
    changem.style.color='#173653';
    var turn=document.getElementById('ds');
    turn.style.display='block';
    var turn=document.getElementById('xs');
    turn.style.display='none';
}
function turn1()
{
    var Turna=document.getElementById('xs');
    Turna.style.display='block';
    var Turna=document.getElementById('ds');
    Turna.style.display='none';
    var Turna=document.getElementById('xiang');
    Turna.style.background='white';
    Turna.style.borderTop='3px solid #FFAC12';
    Turna.style.color='#FFAC12';
    /*var playa=document.getElementById('ds');
    playa.style.background='#C7E7F0'; */
    var changel=document.getElementById('dong');
    changel.style.background='#EFECEC';
    changel.style.border='0px';
    changel.style.color='black';
    var changerr=document.getElementById('shi');
    changerr.style.background='#EFECEC';
    changerr.style.border='0px';
    changerr.style.color='black';
}
