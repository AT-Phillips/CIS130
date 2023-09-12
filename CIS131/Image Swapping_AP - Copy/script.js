/*Austin Phillips, 23/FA-CIS-131-W01, 9/11/23, "Image Swapping 2", styles.css*/

/*Overall, this JavaScript passes a clicked image as an argument and updates the large image 
based on the click action, in this case clicking one of the thumbnails below the large image*/

const firstSetImages = [
    "brown-aussie.jpg",
    "german-shepherd.jpg",
    "golden-retriever.jpg",
    "husky.jpg"
];

const secondSetImages = [
    "another-goldie.jpg",
    "black-aussie.jpg",
    "dog-and-ball.jpg",
    "fluffy-pup.jpg"
];

function generateThumbnail(imgSrc, imgAlt) {
    const thumbnail = document.createElement("img");
    thumbnail.src = imgSrc;
    thumbnail.alt = imgAlt;
    thumbnail.onclick = function () {
        changeImage(this);
    };
    return thumbnail;
}

//Event listener for large image double-click
document.getElementById("large-image").addEventListener("dblclick", function () {
    const thumbnailContainer = document.querySelector(".thumbnail-container");
    thumbnailContainer.innerHTML = "";

    //Generate add thumbnails, second image set
    for (let i = 0; i < secondSetImages.length; i++) {
        const imgSrc = secondSetImages[i];
        const imgAlt = `Thumbnail ${i + 1}`;
        const thumbnail = generateThumbnail(imgSrc, imgAlt);
        thumbnailContainer.appendChild(thumbnail);
    }
});

//Image loading
document.addEventListener("DOMContentLoaded", function () {
    const thumbnailContainer = document.querySelector(".thumbnail-container");

    //Generate add thumbnails, first image set
    for (let i = 0; i < firstSetImages.length; i++) {
        const imgSrc = firstSetImages[i];
        const imgAlt = `Thumbnail ${i + 1}`;
        const thumbnail = generateThumbnail(imgSrc, imgAlt);
        thumbnailContainer.appendChild(thumbnail);
    }
});

function changeImage(thumbnail) {
    const largeImage = document.getElementById("large-image");
    largeImage.src = thumbnail.src;
    largeImage.alt = thumbnail.alt;
}