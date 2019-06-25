
/*banner*/
;(function(){
    var slider = document.querySelector('.slider');
    //参数
    var config = {
        w:slider.offsetWidth,
        current: 0,
        speed: 500,
        intervalTime: 5000
    };
    // 保存查找dom元素
    var slider_img = slider.querySelector('.slider-img');
    var slider_img_ul = slider_img.querySelector('.slider-img-ul');
    var slider_img_ul_li = slider_img_ul.children;

    // 初始化左右按钮
    var slider_btn_left = slider.querySelector('.slider-btn-left');
    var slider_btn_right = slider.querySelector('.slider-btn-right');

    // 初始化圆点
    var slider_dot = slider.querySelector('.slider-dot');
    var slider_dot_ul = slider_dot.querySelector('ul');
    var slider_dot_ul_li = slider_dot_ul.querySelectorAll('li');

    var slider_img_length = slider_img_ul_li.length;

    for (let i=0;i<slider_img_length;i++){
        if (slider_dot_ul_li[i]){
            slider_dot_ul_li[i].className="gray";
        }

    }
    for (var i = 0; i < slider_img_length - 1; i++) {
        // slider_dot_ul_li[i].className("gray");
        if(i === config.current){
            slider_dot_ul_li[i].className="active";
        }
    }

    // 初始化默认显示图片位置
    slider_img_ul.style.left= '0px';

    // 圆点切换点亮
    var active = function(i) {
        for (let i=0;i<slider_dot_ul_li.length;i++){
            slider_dot_ul_li[i].className='gray';
        }
        console.log(i,slider_dot_ul_li,slider_dot_ul_li[i])
        slider_dot_ul_li[i].className = "active";
    };

    // 右点击事件
    slider_btn_right.addEventListener('click', function(event) {
        event.preventDefault();
        toggleInterval ();
        config.current = config.current+1;
        if(config.current < slider_img_length){ //slider_img_length - 1 最后一张
            slider_img_ul.style.left=(- config.w * config.current)+'px';
            active(config.current);
        }else{
            slider_img_ul.style.left= '0px';
            config.current = 0;
            active(config.current);
        }
    },false);

    // 左点击事件
    slider_btn_left.addEventListener('click', function(event) {
        event.preventDefault();
        toggleInterval ();
        config.current --;
        if(config.current > -1){//第二张
            slider_img_ul.style.left=(- config.w * config.current)+'px';
            active(config.current);
        }else {//小于第一张
            slider_img_ul.style.left='0px';
            config.current=0;
            active(config.current)
        }
    },false);

    // dot点击事件
    slider_dot_ul.addEventListener('click', function(event) {
        toggleInterval ();
        var e = e || window.event;
        var oLi = e.srcElement || ev.target;
        var selectIndex=config.current;
        for (let i=0;i<slider_img_ul_li.length;i++) {
            if (oLi === slider_dot_ul_li[i]) {
                selectIndex = i;
            }
        }
        active(selectIndex);
        slider_img_ul.style.left = (- config.w * selectIndex - config.w)+'px';
        config.current = selectIndex;
    });

    // 自动切换
    var sliderInt = setInterval(sliderInterval, config.intervalTime);
    // 判断图片切换
    function sliderInterval() {
        config.current= config.current+1;//下一张
        if (config.current<slider_img_length) {//最后一张
            slider_img_ul.style.left=(- config.w *config.current)+'px';
            active(config.current);
        }else {//大于最后一张
            slider_img_ul.style.left='0px';
            config.current = 0;
            active(config.current)
        }
    }
    // 重置计时器
    function toggleInterval () {
        clearInterval(sliderInt);
        sliderInt = setInterval(sliderInterval, config.intervalTime)
    }
})();
