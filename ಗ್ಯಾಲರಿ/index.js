document.getElementById("Overlay").addEventListener("click", function () {
    e = window.event || e;
    if (this === e.target) {
        this.style.display = "none"
    }
})

var Images = {
    "ಬ್ಯಾಚ್ - 12": [
        "../assets/gallery/1-Batch-1.jpg",
        "../assets/gallery/2-Batch-1.jpg",
        "../assets/gallery/3-Batch-1.jpg",
        "../assets/gallery/4-Batch-1.jpg",
        "../assets/gallery/1-Pravachana.jpg",
        "../assets/gallery/2-Pravachana.jpg"
    ],
    "ಮಹಾರುದ್ರ ಯಜ್ಞ": [
        "../assets/gallery/1-MahaRudra.jpg",
        "../assets/gallery/2-MahaRudra.jpg",
        "../assets/gallery/3-MahaRudra.jpg",
        "../assets/gallery/4-MahaRudra.jpg",
        "../assets/gallery/5-MahaRudra.jpg",
        "../assets/gallery/6-MahaRudra.jpg",
        "../assets/gallery/7-MahaRudra.jpg"

    ],
    "ಮೀಡಿಯಾ": [
        "../assets/gallery/1-Media.jpg",
        "../assets/gallery/2-Media.png"
    ],
    "ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ":[
        "../assets/gallery/1-GaneshaPooja.jpg",
        "../assets/gallery/2-GaneshaPooja.jpg",
        "../assets/gallery/3-GaneshaPooja.jpg",
        "../assets/gallery/Pooja (1).jpeg",
        "../assets/gallery/Pooja (2).jpeg",
        "../assets/gallery/Pooja (3).jpeg",
        "../assets/gallery/Pooja (4).jpeg"
    ],
    "ವೇದ ತರಬೇತಿ":[
        "../assets/gallery/Veda (1).jpeg",
        "../assets/gallery/Veda (2).jpeg",
        "../assets/gallery/Veda (3).jpeg",
        "../assets/gallery/Veda (4).jpeg"
    ],
    "ಯೋಗ ದಿನಾಚರಣೆ":[
        "../assets/gallery/1-OtherActivities.jpg",
        "../assets/gallery/2-OtherActivities.jpg",
    ]
}
var SectionImagePos = 1;
var CurrentImageList = [];
function Add(Name, Url) {
    var ImageContainer = document.createElement("div")
    ImageContainer.classList.add("ImageContainer")
    ImageContainer.innerHTML = `
<img src="${Url}">
    <div class="ImageBottom">${Name}</div>`
    document.querySelector(".ImageLFlex").append(ImageContainer)
    ImageContainer.addEventListener("click", function () {
        var Overlay = document.getElementById("OverlayImage")
        Overlay.parentElement.parentElement.style.display = "flex"
        CurrentImageList = Images[this.querySelector(".ImageBottom").textContent]
        SectionImagePos = 1
        Overlay.src = CurrentImageList[0]
    })
}

document.getElementById("OBack").addEventListener("click", function () {
    if (SectionImagePos == 1) {
        SectionImagePos = CurrentImageList.length + 1
    }
    SectionImagePos = SectionImagePos - 1
    document.getElementById("OverlayImage").src = CurrentImageList[SectionImagePos - 1]
})
document.getElementById("OForward").addEventListener("click", function () {
    if (SectionImagePos == CurrentImageList.length) {
        SectionImagePos = 0
    }
    SectionImagePos = SectionImagePos + 1
    document.getElementById("OverlayImage").src = CurrentImageList[SectionImagePos - 1]
})

Add("ಬ್ಯಾಚ್ - 12", "../assets/gallery/1-Batch-1.jpg")
Add("ಮಹಾರುದ್ರ ಯಜ್ಞ", "../assets/gallery/1-MahaRudra.jpg")
Add("ಮೀಡಿಯಾ", "../assets/gallery/1-Media.jpg")
Add("ಪೂಜಾ ಕಾರ್ಯಕ್ರಮ", "../assets/gallery/1-GaneshaPooja.jpg")
Add("ಯೋಗ ದಿನಾಚರಣೆ", "../assets/gallery/1-OtherActivities.jpg")
Add("ವೇದ ತರಬೇತಿ", "../assets/gallery/Veda (1).jpeg")

for (const Imgs in Images) {
    for (const Img of Images[Imgs]) {
        let N = new Image();
        N.src = Img
    }
}