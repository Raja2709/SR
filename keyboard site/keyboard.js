document.addEventListener('keydown', (e) => {
    buttonAnimation(e.code)
})

function buttonAnimation(currentKey) {
    let activeKey = document.querySelector("." + currentKey)
    if (currentKey === "CapsLock") {
        activeKey.classList.toggle('capsPressed')
    } else {
        activeKey.classList.add('pressed')
        setTimeout(() => { activeKey.classList.remove("pressed") }, 200)
    }

}