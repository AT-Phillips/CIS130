function changeImage(thumbnail) {
    const largeImage = document.getElementById("large-image");
    largeImage.src = thumbnail.src;
    largeImage.alt = thumbnail.alt;
}