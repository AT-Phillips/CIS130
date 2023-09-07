/*Overall, this JavaScript passes a clicked image as an argument and updates the large image 
based on the click action, in this case clicking one of the thumbnails below the large image*/

function changeImage(thumbnail) {
    const largeImage = document.getElementById("large-image");
    largeImage.src = thumbnail.src; /*This replaces the "src" of the large image with the "src" of the clicked image*/
    largeImage.alt = thumbnail.alt;
}