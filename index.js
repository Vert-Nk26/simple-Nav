const getBurgerMenu = document.getElementById("burger")
const getNavigation = document.getElementById("navigation")
const getListItems = Array.from(document.querySelectorAll("li"))

getBurgerMenu.addEventListener("click", () => {
  showNav()
  navListFadeIn()
  getBurgerMenu.classList.toggle("close")
})
// Show Nav
const showNav = nav => {
  getNavigation.classList.toggle("active")
}

// NavListFAdeIn

const navListFadeIn = () => {
  getListItems.forEach((navList, indexOf) => {
    if (navList.style.animation) {
      navList.style.animation = ""
    } else {
      navList.style.animation = `fadeIn .3s forwards ${indexOf / 7 + 0.3}s`
    }
  })
}
