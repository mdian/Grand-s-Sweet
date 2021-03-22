// let c = document.createElement("ff");


let a = [1, 2, 3]

let s = "1,2,3"

console.log(a == s)


let card = document.querySelector('.card_order')
let btnCard = document.querySelector('.btncard')
console.log(card)
btnCard.addEventListener("click", () => {
    card.classList.toggle("show")
    console.log("hh")
})