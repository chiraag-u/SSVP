const Tabs = document.getElementById("Tab").querySelectorAll("div")
for (const Tab of Tabs) {
    Tab.addEventListener("click", function () {
        document.getElementsByTagName("h3")[0].textContent = this.textContent;
        for (const Tab of Tabs) Tab.removeAttribute("default")
        this.setAttribute("default", "")
        for (const TabName of Array.from(Tabs).map((Each) => Each.textContent.replaceAll(' ', ""))) document.getElementById(TabName).style.display = "none"
        document.getElementById(this.textContent.replaceAll(' ', "")).style.display = "flex"
    })
}
document.querySelector("#Tab div[default]").click()

for (const Expand of document.getElementById("Expand").getElementsByTagName("li")) {
    Expand.addEventListener("click", function () {
        if (this.nextElementSibling.hidden == false) {
            this.nextElementSibling.hidden = true
        } else {
            this.nextElementSibling.hidden = false
        }
    })
}