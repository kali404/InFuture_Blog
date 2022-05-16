var typed = new Typed(".text", {
    strings: [
        "欢迎来到我的小破站!", 
        "试炼的尽头是花开万里!",
        "我当然不会试图摘月，我要月亮奔我而来。",
        "尊重所有声音，但只成为自己。",
        "热爱漫无边际，生活自有分寸。",
        "知足且上进，温柔而坚定。",
    ],
    typeSpeed: 150,//打字的速度
    smartBackspace: true, // 开启智能退格 默认false
    // cursorChar: '_',
    backSpeed: 50,//后退速度
    backDelay: 500,//后退延迟
    loop:true,//是否循环
    startDelay:1000,//起始时间
    fadeOut:true,//淡出效果
    });

document.getElementsByClassName("headimg")[0].style.marginTop=((window.innerHeight/2)-180)+"px";
document.getElementsByClassName("hello")[0].style.marginTop = window.innerHeight/5 +"px";
document.getElementsByClassName("container")[0].style.top =(window.innerHeight-document.getElementsByClassName("container")[0].clientHeight)/2+"px";