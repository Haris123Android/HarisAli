const imgs = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
]

let teamImgs = document.getElementById("container")

function getImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="team-img" id="team-img" src="${imgs[i]}" alt="">`
    }
    teamImgs.innerHTML = imgsDOM
}
getImages()