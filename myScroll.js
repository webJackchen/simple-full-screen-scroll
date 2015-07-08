(function($){
    var menuLi = $("#menu li"),
        page = $("#page"),
        nowIndex = 0,
        lastIndex = 0,
        winH = $(window).height(),
        canScroll = true;
    var settings = {
        afterFnArr : [],
        leaveFnArr :[],
        start:0
    }
    $.MyScroll = function(){}
    $.MyScroll.prototype.init = function(opt){
        $.extend(settings,opt || {});
        nowIndex = settings.start;
        this.handleClick();
        this.MouseWheelHandler();
    }
    var sp = $.MyScroll;
    $.MyScroll.prototype.handleClick = function(){
        var This = this;
        menuLi.on("click",function(){
            lastIndex = nowIndex;
            nowIndex = $(this).index();
            settings.leaveFnArr[lastIndex]();
            menuLi.removeClass("active").html("");
            $(this).addClass("active").html($(this).attr("data-text"));
            page.animate({top:-nowIndex*winH},1000,function(){
                settings.afterFnArr[nowIndex]();
            });
        })
    }

    var flag = true;
    $.MyScroll.prototype.MouseWheelHandler = function mouseWheelHandler(e){
        addEvent(document, "mousewheel", function(event) {
            if(flag){
                flag = false;
                var status = true;
                if (event.delta < 0) {
                    if(nowIndex == 0){
                        status = false;
                    }else{
                        nowIndex --;
                    }
                    if( status ){
                        settings.leaveFnArr[lastIndex]();
                        menuLi.removeClass("active").html("");
                        menuLi.eq(nowIndex).addClass("active").html(menuLi.eq(nowIndex).attr("data-text"));
                        page.animate({top:-nowIndex*winH},1000,function(){
                            settings.afterFnArr[nowIndex]();
                        });
                    }
                }else{
                    lastIndex = nowIndex;
                    if(nowIndex == menuLi.length-1){
                        status = false;
                    }else{
                        nowIndex ++;
                    }
                    if( status ){
                        settings.leaveFnArr[lastIndex]();
                        menuLi.removeClass("active").html("");
                        menuLi.eq(nowIndex).addClass("active").html(menuLi.eq(nowIndex).attr("data-text"));
                        page.animate({top:-nowIndex*winH},1000,function(){
                            settings.afterFnArr[nowIndex]();
                        });
                    }
                }
                setTimeout(function () {
                    flag = true;
                }, 1000);
            }
        });
    }
    var addEvent = (function(window, undefined) {
        var _eventCompat = function(event) {
            var type = event.type;
            if (type == 'DOMMouseScroll' || type == 'mousewheel') {
                event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
            }
            //alert(event.delta);
            if (event.srcElement && !event.target) {
                event.target = event.srcElement;
            }
            if (!event.preventDefault && event.returnValue !== undefined) {
                event.preventDefault = function() {
                    event.returnValue = false;
                };
            }
            /*
             ......其他一些兼容性处理 */
            return event;
        };
        if (window.addEventListener) {
            return function(el, type, fn, capture) {
                if (type === "mousewheel" && document.mozHidden !== undefined) {
                    type = "DOMMouseScroll";
                }
                el.addEventListener(type, function(event) {
                    fn.call(this, _eventCompat(event));
                }, capture || false);
            }
        } else if (window.attachEvent) {
            return function(el, type, fn, capture) {
                el.attachEvent("on" + type, function(event) {
                    event = event || window.event;
                    fn.call(el, _eventCompat(event));
                });
            }
        }
        return function() {};
    })(window);
})($)
