$(document).ready(function () {
    $("#slick-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false, // Habilita as setas de navegação
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Personaliza a seta anterior
        nextArrow: '<button type="button" class="slick-next">Next</button>', // Personaliza a seta seguinte
    });
});