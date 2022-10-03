let icon=document.querySelector('.icon');
let times=document.querySelector('.times');
 let mobile=document.querySelector('.mobile-nav');

icon.addEventListener('click',function(){
    mobile.classList.add('open');
})

times.addEventListener('click',function(){
    mobile.classList.remove('open');
})