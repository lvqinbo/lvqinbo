    $(function() {
        var $main = $('#main');
        var $list = $('#list');
        var $li = $list.find('>li');
        var $nav = $('#nav');
        var $navLi = $nav.find('li');

        var desW = 640;
        var desH = 1136;
        var viewHeight = $(window).height();
        var viewWidth = $(window).width();

        $main.css('height', viewHeight);
        $nav.css('width', viewWidth);
        
        // 资源加载
        var addSrc = (function(){

            var arr = [
                '1p/1p01.jpg', '1p/1p02.png', '1p/1p03.png', 
                '2p/2p01.jpg', '2p/2p02.png', '2p/2p03.png','2p/2p04.png', 
                '3p/3p01.jpg', '3p/3p02.png', 
                '4p/4p01.jpg', '4p/4p02.png', '4p/4p03.png', 
                '5p/5p01.jpg', '5p/5p02.png', 
                '6p/6p01.jpg', '6p/6p02.png', '6p/6p03.png', '6p/6p04.png', 
                '7p/7p01.jpg', '7p/7p02.png', 
                '8p/8p01.jpg','8p/8p02.png'
            ];
            var $loading = $('#loading');
            var iNow = 0;

            for (var i = 0; i < arr.length; i++) {
                var objImg = new Image();
                objImg.src = 'img/' + arr[i];
                objImg.onload = function() {
                    iNow++;
                    if (iNow == arr.length) {
                        $loading.animate({
                            opacity: 0
                        }, 1000, function() {
                            $(this).remove();
                            cjAnimate[0].inAn();
                        });
                    }
                };
                objImg.onerror = function() {
                    $loading.animate({
                        opacity: 0
                    }, 1000, function() {
                        $(this).remove();
                        cjAnimate[0].inAn();
                    });
                };
            }
        })();
            
        slideList();

        function nowWidth() {
            var w = desW / desH * viewHeight;
            w = w > desW ? w : desW;
            return w;
        }
        // 滑动函数
        function slideList() {
            $li.css('backgroundPosition',((desW - nowWidth())/2)+'px 0');
            var downY = 0;
            var step = 1 / 4;

            var nowIndex = 0;
            var nextorprevIndex = 0;
            var bBtn = true;
            
            // 手指按下
            $li.on('touchstart', function(ev) {
                if (!bBtn) {
                    return;
                }
                bBtn = false;
                var touch = ev.originalEvent.changedTouches[0];
                downY = touch.pageY;
                nowIndex = $(this).index();


                // 手指滑动
                $li.on('touchmove', function(ev) {
                    var touch = ev.originalEvent.changedTouches[0];

                    $(this).siblings().hide();

                    if (touch.pageY < downY) { //↑
                        nextorprevIndex = nowIndex == $li.length - 1 ? 0 : nowIndex + 1;
                        $li.eq(nextorprevIndex).css('transform', 'translate(0,' + (viewHeight + touch.pageY - downY) + 'px)');
                    } else if (touch.pageY > downY) { //↓
                        nextorprevIndex = nowIndex == 0 ? $li.length - 1 : nowIndex - 1;
                        $li.eq(nextorprevIndex).css('transform', 'translate(0,' + (-viewHeight + touch.pageY - downY) + 'px)');
                    } else {
                        bBtn = true;
                    }

                    //Math.abs(touch.pageY - downY)/viewHeight*step  //-viewHeight~viewHeight
                    //0~1  -> 0~0.25
                    $li.eq(nextorprevIndex).show().addClass('zIndex');
                    $(this).css('transform', 'translate(0,' + (touch.pageY - downY) * step + 'px) scale(' + (1 - Math.abs(touch.pageY - downY) / viewHeight * step) + ')');

                });
                // 手指抬起
                $li.on('touchend', function(ev) {
                    var touch = ev.originalEvent.changedTouches[0];
                    if (touch.pageY < downY) { //↑
                        $(this).css('transform', 'translate(0,' + (-viewHeight * step) + 'px) scale(' + (1 - step) + ')');
                    } else if (touch.pageY > downY) { //↓
                        $(this).css('transform', 'translate(0,' + (viewHeight * step) + 'px) scale(' + (1 - step) + ')');
                    }
                    $(this).css('transition', '.3s');
                    $li.eq(nextorprevIndex).css('transform', 'translate(0,0)');
                    $li.eq(nextorprevIndex).css('transition', '.3s');
                });

            });
            // 监听滑动结束
            $li.on('transitionEnd webkitTransitionEnd', function(ev) {
                if ($li.is(ev.target)) {
                    resetFn();
                    if (cjAnimate[nowIndex]) {
                        cjAnimate[nowIndex].outAn();
                    }
                    if (cjAnimate[nextorprevIndex]) {
                        cjAnimate[nextorprevIndex].inAn();
                    }
                }
            });

            function resetFn() {
                $li.css('transition', '');
                $li.eq(nextorprevIndex).removeClass('zIndex').siblings().hide();
                bBtn = true;
            }
        }

        //场景动画
        var cjAnimate = [{
                inAn: function() {
                    var $item = $li.eq(0).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '.8s');
                    $item.css('transform', 'translate(0,0)');
                },
                outAn: function() {
                    var $item = $li.eq(0).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.eq(0).css('transform','translate(0,-600px)');
                    $item.eq(1).css('transform','translate(0,1000px)');
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(1).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '1s');
                    $item.css('transform', 'translate(0,0)');
                    $item.eq(0).css('transform','rotate(720deg)');
                    $item.eq(1).css('transform','scale(1)');
                },
                outAn: function(){
                    var $item = $li.eq(1).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.eq(0).css('transform','rotate(0deg)');
                    $item.eq(1).css('transform','scale(0.5)');
                    $item.eq(2).css('transform','translate(0,600px)');
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(2).find('div');
                    $item.css('opacity', 1);
                    $item.css('transition', '1s');
                    $item.css('transform', 'translate(0,0)');
                },
                outAn: function(){
                    var $item = $li.eq(2).find('div');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.css('transform','translate(-400px,0)');
                    
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(3).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '.6s');
                    $item.css('transform', 'translate(0,0)');
                    $item.eq(1).css('transform','scale(1)');
                },
                outAn: function(){
                    var $item = $li.eq(3).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.css('transform','translate(0,-400px)');
                    $item.eq(1).css('transform','scale(0)');
                    
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(4).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '1.2s');
                    $item.eq(0).css('transform','rotateY(720deg)');
                },
                outAn: function(){
                    var $item = $li.eq(4).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.eq(0).css('transform','rotateY(0deg)');
                    
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(5).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '.6s');
                    $item.css('transform','translate(0,0)');
                    $item.eq(0).css('transform','scale(1)');
                },
                outAn: function(){
                    var $item = $li.eq(5).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.eq(0).css('transform','scale(1.5)');
                    $item.eq(1).css('transform','translate(0,600px)');
                    $item.eq(2).css('transform','translate(0,-600px)');
                    
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(6).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '.6s');
                    $item.css('transform','translate(0,0)');
                },
                outAn: function(){
                    var $item = $li.eq(6).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.css('transform','translate(0,-400px)');
                }
            },
            {
                inAn: function(){
                    var $item = $li.eq(7).find('li');
                    $item.css('opacity', 1);
                    $item.css('transition', '1s');
                    $item.css('transform','translate(0,0)');
                    $item.eq(0).css('transform','rotateY(720deg)');
                },
                outAn: function(){
                    var $item = $li.eq(7).find('li');
                    $item.css('opacity', 0);
                    $item.css('transition', '');
                    $item.eq(0).css('transform','rotateY(0deg)');
                    $item.eq(1).css('transform','translate(0,600px)');
                    $item.eq(2).css('transform','translate(-300px,0)');
                }
            }
        ];

        /*cjAnimate[7].outAn();
        setTimeout(function(){
            cjAnimate[7].inAn();
        },200);*/

        $.each(cjAnimate, function(i, obj) {
            obj.outAn();
        });

    });
