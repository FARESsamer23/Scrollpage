 let stars = document.getElementById('stars');
 let moon = document.getElementById('MOON');
 let mont3 = document.getElementById('mont3');
 let mont4 = document.getElementById('mont4');
 let river = document.getElementById('river');
 let boat = document.getElementById('boat');
 let sarah= document.querySelector('.sarah');
 window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px'
    moon.style.top = value*3 +'px'
    boat.style.top = value*1.5 +'px'
    mont3.style.top = value*2 +'px'
    mont4.style.top = value*1.5 +'px'
    mont4.style.top = value*1.2 +'px'
    river.style.top = value*1.5 +'px'
    boat.style.left = value*4 +'px'
    sarah.style.fontSize = value +'px'

 }


