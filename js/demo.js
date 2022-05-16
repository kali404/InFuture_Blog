window.onresize = resizeBannerImage;
function resizeBannerImage() {
    var winW = $(window).width();
    if ($(window).width() > 600) {
        document.getElementsByClassName("headimg")[0].style.marginTop=((window.innerHeight/2)-180)+"px";
        document.getElementsByClassName("hello")[0].style.marginTop = window.innerHeight/5 +"px";
        document.getElementsByClassName("container")[0].style.top =(window.innerHeight-document.getElementsByClassName("container")[0].clientHeight)/2+"px";
    }
}

