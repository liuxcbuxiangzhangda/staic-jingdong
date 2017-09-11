/**
 * Created by Administrator on 2017/7/18.
 */
window.onload=function() {
    var mainSlider = new JsSliderOne( ".js-slider",".js-slider li",".js-slider-circle span", ".js-slider-turn:first", ".js-slider-turn:last" );
    var buySlider=new JsSliderOne(".buy-content",".buy-slider",".buy-circle li",".buy-turn:first",".buy-turn:last")
    buySlider.oldBgColor="#C8C8C8"
}