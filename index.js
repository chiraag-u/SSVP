var ImagePosition = 1;
const Mover = document.getElementById("Move")
var MenuOpen = false
var NumberOnce = true
var SectionImagePos = 1
var TotalSectionImage = document.getElementById("SubCar").getElementsByTagName("img").length
var SectionText = ["MahaRudra Yagya", "Invitation for MahaRudra Yagya"]
document.getElementById("SubText").getElementsByTagName("span")[0].textContent = SectionText[SectionImagePos-1]
setInterval(() => {
    let Width = window.innerWidth;
    let Right = parseFloat(getComputedStyle(Mover).right) + window.outerWidth;
    ImagePosition = Math.ceil(Right / Width);
    for (let i = 1; i < 5; i++) document.querySelector(`div[dotposition="${i}"]`).style.opacity = .4
    document.querySelector(`div[dotposition="${ImagePosition}"]`).style.opacity = 1
}, 500);

document.addEventListener("scroll", function () {
    if (!Mobile) {
        if (window.scrollY >= 100) {
            document.getElementById("Navigation").classList.add("NavigationDiminish")
            document.getElementById("Logo").src = "assets/BrownLogo.svg"
        } else {
            if (MenuOpen) document.getElementById("Menu").click()
            document.getElementById("Navigation").classList.remove("NavigationDiminish")
            document.getElementById("Logo").src = "assets/WhiteLogo.svg"
        }
    }
    if (NumberOnce) {
        if (window.scrollY >= DetectAt) {
            for (const StatItem of document.getElementById("Statistics").children) {
                var StatNumber = StatItem.children[0]
                animate(StatNumber, 0, StatNumber.textContent, 5000)
            }
            NumberOnce = false
        }
    }
})

function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    window.requestAnimationFrame(step);
}

const MenuOpenClose = () => {
    if (MenuOpen) {
        document.getElementById("CompAside").classList.remove("Open")
        document.getElementById("Menu").getElementsByTagName("img")[0].src = "assets/icons/Menu.svg"
        document.getElementById("MobAside").getElementsByTagName("img")[0].src = "assets/icons/WMenu.svg"
        MenuOpen = false
    } else {
        document.getElementById("CompAside").classList.add("Open")
        document.getElementById("Menu").getElementsByTagName("img")[0].src = "assets/icons/Close.svg"
        document.getElementById("MobAside").getElementsByTagName("img")[0].src = "assets/icons/WClose.svg"
        MenuOpen = true
    }
}

document.getElementById("Menu").addEventListener("click", MenuOpenClose)

document.getElementById("MobAside").addEventListener("click", MenuOpenClose)

for (const Element of ["#Scroller", "#Introduction", "footer"]) {
    document.querySelector(Element).addEventListener('click', function () {
        if (MenuOpen) {
            MenuOpenClose()
        }
    })
}


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        
        if (MenuOpen) {
            document.getElementById("CompAside").classList.remove("Open")
            document.getElementById("Menu").getElementsByTagName("img")[0].src = "assets/icons/Menu.svg"
            MenuOpen = false
        }
    }
};

for (const MenuItem of document.getElementById("AsideMain").children) {
    MenuItem.addEventListener("click", function () {
        window.location.href = './' + this.textContent.replace(" ", "")
    })
}



var SectionWidth = document.getElementById("Carousel").clientWidth
document.getElementById("Back").addEventListener("click", function () {
    if (SectionImagePos == 1) {
        SectionImagePos = TotalSectionImage+1
    }
    SectionImagePos = SectionImagePos - 1
    document.getElementById("SubCar").style.right = (SectionImagePos - 1) * SectionWidth + "px"
    document.getElementById("SubText").getElementsByTagName("span")[0].textContent = SectionText[SectionImagePos-1]
})

document.getElementById("Forward").addEventListener("click", function () {
    if (SectionImagePos == TotalSectionImage) {
        SectionImagePos = 0
    }
    SectionImagePos = SectionImagePos + 1
    document.getElementById("SubCar").style.right = (SectionImagePos - 1) * SectionWidth + "px"
    document.getElementById("SubText").getElementsByTagName("span")[0].textContent = SectionText[SectionImagePos-1]
})

document.getElementById("NavLeft").addEventListener("click", function () {

})