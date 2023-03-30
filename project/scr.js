// document.querySelectorAll('a[href^="a"]').forEach(anchor => {
//     anchor.addEventListener("click",function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior:"smooth"
//         });
//     });
// });

// Add smooth scrolling to anchor links
$('a.scroll').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});

