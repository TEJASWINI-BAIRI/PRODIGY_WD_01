function imgSlider(element) {
    const heroImage = document.getElementById('main-hero-image');
    heroImage.src = element.getAttribute('data-src');
}
