var CONST = Object.freeze({
    interval: 5000,
    animTime: 1000,
    animTimeFast: 100
});
var carousel = $('#carousel');
var listCarousel = $('#carousel ul');
var elListCarousel = $('#carousel ul li');
var listener = null;
setImageWidth();
startCarousel();
function startCarousel() {
    listener = setInterval(function() {
        changeSlide(CONST.animTime);
    }, CONST.interval);
}
function setImageWidth() {
    elListCarousel.width(carousel.width());
}
function changeSlide(time) {
    if(!(listCarousel.is(':animated'))) {
        listCarousel.animate({'margin-left': -carousel.width()}, time, moveFirstSlide);
    }
}
function changeSlideBack(time) {
    if(!(listCarousel.is(':animated'))) {
        moveFirstSlideBack();
        listCarousel.animate({marginLeft: 0}, time);
    }
}
function moveFirstSlideBack() {
    var firstItem = listCarousel.find('li:first');
    var lastItem = listCarousel.find('li:last');
    firstItem.before(lastItem);
    listCarousel.css({marginLeft: -carousel.width()})
}
function moveFirstSlide() {
    var firstItem = listCarousel.find('li:first');
    var lastItem = listCarousel.find('li:last');
    lastItem.after(firstItem);
    listCarousel.css({'margin-left': 0});
}
$(window).resize(function(){
    setImageWidth();
});
$('#moveRight').click(function() {
    clearInterval(listener);
    changeSlide(CONST.animTimeFast);
    startCarousel();
});
$('#moveLeft').click(function() {
    clearInterval(listener);
    changeSlideBack(CONST.animTimeFast);
    startCarousel();
});
