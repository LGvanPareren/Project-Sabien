// navbar is
const topMenu = $("nav ul li");
const topMenuHeight = topMenu.outerHeight() + 15;
const menuItems = topMenu.find("a");
const scrollItems = menuItems.map(function() {
    const item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});

check();

function check() {
    $(window).scroll(function() {
        const fromTop = $(this).scrollTop() + topMenuHeight + $('header')[0].offsetHeight;

        let cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });


        cur = cur[cur.length - 1];
        const id = cur && cur.length ? cur[0].id : "";

        for (let i = 0; i < menuItems.length; i++) {
            let menuItem = menuItems[i];
            if (menuItem.attributes.href.value.replace("#", "") === id)
                menuItem.classList.add("active");
            else if (menuItem.classList.contains("active"))
                menuItem.classList.remove("active")
        }

    });
}

$('nav ul').click(function() {
    if ($('header').hasClass("is-active")) {
        menu_toggle();
    }
})

window.onscroll = check;

//caroussel

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}