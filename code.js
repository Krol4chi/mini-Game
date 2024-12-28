


document.getElementById(`rock`).addEventListener(`click`, () => play (`Камень`))

document.getElementById(`scissors`).addEventListener(`click`, () => play (`Ножницы`))

document.getElementById(`paper`).addEventListener(`click`, () => play (`Бумага`))


function play (players) {
  const arr = [`Камень`, `Ножницы`,`Бумага`];
const randomArr = arr[Math.floor(Math.random() * 3)]
console.log(randomArr)
let resultGame;
if (players === randomArr) {
 resultGame = `Ничья`
} else if (players === "Камень" && randomArr === "Ножницы" || players === "Ножницы" && randomArr === `Бумага` || players === `Бумага` &&  randomArr === `Камень`) {
    resultGame = `Игрок выйграл`
} else {
  resultGame = `Компьютер выйграл`
}
document.getElementById(`result`).textContent = `У компьютера ${randomArr}, ${resultGame}`
}



