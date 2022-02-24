// innerHTML
// innerHTML
// innerTEXT

let links = document.querySelectorAll(".nav__link")
console.log(links)

let task1 = Array.from(links)
console.log(task1[0].innerHTML)
console.log(task1[0].textContent)
console.log(task1[0].innerText)
console.log(task1)

let link = document.querySelectorAll(".nav__link")
console.log(links)

let task2 =task1.map(el =>el.innerHTML)
console.log(task2)

// 3
let navItems = Array.from(document.querySelectorAll(".nav__link__item"))
console.log(navItems.map(el => el.textContent))

// 4
  let task4 = document.querySelectorAll(".nav__link__item")
task4 = Array.from(task4).map(el => el.getAttribute("class"))
console.log(task4)

// 5
let task5 = document.querySelectorAll(".nav__link")
task5 = Array.from(task5).map(el = el.getAttribute("data-link"))
console.log(task5)

// 6

let task6 =Array.from(document.querySelectorAll(".nav__link"))
task6 = task6.filter(el =>{
    // return el.getAttribute("class").includes(el.textContent)
return el.getAttribute("class").split(" ")[1] === el.textContent
})
task6 = task6.map(el => el.getAttribute("data-link"))
console.log(task6)


// 7
 let task7 = Array.from(document.querySelectorAll(".nav__link"))
task7 = task7.forEach( item => {
    item.textContent = `${item.getAttribute("data-link")} ${item.getAttribute("class").split(" ")[1]}`
    })

// 8

let task8 = Array.from( document.querySelectorAll(".nav__link"))
task8 =task8.forEach(el =>{
if (el.getAttribute("class").includes(el.textContent)){
    el.remove()
}
})
console.log(task8)

// 9

let appendDiv = document.querySelectorAll("#append-div")

let div = document.createElement("div")
// div.id ="just-text"
div.setAttribute("id","just-text")
div.innerHTML ="hello"
appendDiv.appendChild(div)