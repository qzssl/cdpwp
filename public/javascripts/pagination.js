/**
 * jQuery编写插件的方法：
 * 1.类级别开发插件
 *  类级别的静态开发就是给jquery添加静态方法，三种方式：
 *  1).添加新的全局函数
 *  2).使用$.extend(obj)
 *  3).使用命名空间
 *  类级别开发插件（用的非常少，1%）
 * 2.对象级别开发
 *  ;(function ($) {
 *      $.fn.plugin=function (options) {
 *          var defaults={//各种参数、各种属性};
 *          //options合并到defaults上,defaults继承了options上的各种属性和方法,将所有的赋值给endOptions
 *          var endOptions=$.extend(defaults,options);
 *          this.each(function () {//实现功能的代码});
 *      };
 *  })(jQuery);
 *
 * */


;(function ($,window) {


})(jQuery,window)
