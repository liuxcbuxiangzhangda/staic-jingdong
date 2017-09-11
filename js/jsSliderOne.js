/**
 * Created by Administrator on 2017/7/18.
 */
/*
 *this.sliderWarp 获取轮播最外层div  warp
 * this.sliderDiv 获取轮播div sDiv
 * this.sliderCircle获取小圆圈的集合 circle
 *this.turnLeft 获取左边按钮元素 left
 * this.turnRight 获取右边按钮元素 right
 * this.remember 计数
 * this.time 定时器的时间
 * this.oldBgColor="#fff"; 小圆圈初始的颜色
 * this.newBgColor="#DB192A"; active小圆圈的颜色
 * this.oldBgDis="none"; 轮播div最开始的状态
 * this.newBgDis="block"; 此div轮到的状态
 * */
function JsSliderOne(warp,sDiv,circle,left,right) {
    this.sliderWarp=$(warp);
    this.sliderDiv=$(sDiv);
    this.sliderCircle=$(circle);
    this.turnLeft=$(left);
    this.turnRight=$(right);
    this.remember=0;
    this.time=1000;
    this.oldBgColor="#fff";
    this.newBgColor="#DB192A";
    this.oldBgDis="none";
    this.newBgDis="block";
    this.circleChange();
    this.sliderImg();
    this.autoSlider();
}
JsSliderOne.prototype={
    constructor :JsSliderOne,
    /*图片和样式的变化*/
    change:function (end,now) {
        this.sliderCircle.eq(end).css("backgroundColor",this.oldBgColor);
        this.sliderDiv.eq(end).css("display",this.oldBgDis);
        this.sliderCircle.eq(now).css("backgroundColor",this.newBgColor);
        this.sliderDiv.eq(now).css("display",this.newBgDis);
    },
    /*右变化*/
    rightSlider:function () {
        var rem=this.remember;
        this.remember++;
        if(this.remember>this.sliderCircle.length-1){
            this.remember=0;
        }
        this.change(rem,this.remember);
    },
    /*小圆圈mouseover时，轮播的变化*/
    circleChange:function () {
        var _this =this;
        _this.sliderCircle.mouseover(function () {
            var num=_this.sliderCircle.index( this);
            _this.change(_this.remember,num);
            _this.remember=num;
        });
    },
    /*点击左右按钮，轮播的变化*/
    sliderImg:function () {
        var _this=this;
        _this.turnLeft.click(function () {
            var rem = _this.remember;
            _this.remember--;
            if (_this.remember < 0) {
                _this.remember = _this.sliderCircle.length - 1;
            }
            _this.change(rem, _this.remember);
        });
        _this.turnRight.click( function () {
            _this.rightSlider();
        });
    },
    /*自动轮播*/
    autoSlider:function () {
        var _this = this;
        var timer = setInterval(function(){_this.rightSlider()}, _this.time);
        _this.sliderWarp.mouseover(function () {
            clearInterval(timer)
        }).mouseout(function () {
            timer = setInterval(function(){_this.rightSlider()}, _this.time)
        })
    }
};
