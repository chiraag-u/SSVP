var Mobile;
var DetectAt = 1100
if (window.outerWidth < 700) {
    document.getElementById("Logo").src = Path + "assets/BrownLogo.svg"
    for (const Element of document.getElementsByClassName("Unmobile")) {
        Element.style.display = 'none'
    }
    for (const Element of document.getElementsByClassName("Mobile")) {
        Element.style.display = 'flex'
    }
    Mobile = true
    DetectAt = 400
}else{
    document.getElementById("Logo").src = Path + "assets/WhiteLogo.svg"
}
document.getElementById("Logo").style.display = "block";

document.addEventListener("scroll", function () {
    if (!Mobile) {
        if (window.scrollY >= 100) {
            document.getElementById("Navigation").classList.add("NavigationDiminish")
            document.getElementById("Logo").src = Path + "assets/BrownLogo.svg"
        } else {
            document.getElementById("Navigation").classList.remove("NavigationDiminish")
            document.getElementById("Logo").src = Path + "assets/WhiteLogo.svg"
        }
    }
})

for (const MenuItem of document.getElementById("FooterLinksList").children) {
    MenuItem.addEventListener("click", function () {
        window.location.href = Path + './' + this.textContent.replace(" ", "")
    })
}

document.getElementById("Home").addEventListener("click", function () {
    window.location.href = "../"
})


document.getElementById("NavLeft").addEventListener("click", function () {
    window.location.href = "../"
})