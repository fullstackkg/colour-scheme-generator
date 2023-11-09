const colorInputEl = document.querySelector("#color-input")
const schemeSelect = document.querySelector("#scheme-input")
const colorSchemeBtn = document.querySelector(".scheme-btn")
const colorContainer = document.querySelector("#color-scheme-container")
const firstColorDiv = document.querySelector("#first-color")
const secondColorDiv = document.querySelector("#second-color")
const thirdColorDiv = document.querySelector("#third-color")
const fourthColorDiv = document.querySelector("#fourth-color")
const fifthColorDiv = document.querySelector("#fifth-color")



colorSchemeBtn.addEventListener("click", (e) => {
    let colorInputValue = colorInputEl.value.substring(1)
    let schemeInputValue = schemeSelect.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputValue}&mode=${schemeInputValue}`)
        .then(response => response.json())
        .then(data => {
            const { colors } = data
            colors.forEach((color, index) => {
                let hexValue = color.hex.value
                colorContainer.children[index].style.backgroundColor = hexValue
            })
        })
})





