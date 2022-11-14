try {
    const pathname = document.location.pathname
    const navItem = document.querySelector(`[data-nav="${pathname}"]`)
    navItem.classList.add("sertan-location")
}
catch (e) {}