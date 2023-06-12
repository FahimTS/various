// // ================ javascript number count effect =================
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 2000;

// valueDisplays.forEach((valueDisplay) => {
//     let starValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function(){
//         starValue += 1;
//         valueDisplay.textContent = starValue;
//         if(starValue == endValue){
//             clearInterval(counter)
//         };
//     }, duration);
// });

// // ================ jQuery number count effect =================
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
        });
});

// ==================== main menu js ======================
$('.menu-toggle-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.header-menu').toggleClass('active');
});