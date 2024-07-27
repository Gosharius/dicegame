var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var numberOfDice = "dice" + randomNumber1 + ".png";

var addressOfDice = "./images/" + numberOfDice;

document.querySelector(".img1").setAttribute("src", addressOfDice );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var numberOfDice = "dice" + randomNumber2 + ".png";

var addressOfDice = "./images/" + numberOfDice;

document.querySelector(".img2").setAttribute("src", addressOfDice );



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";

} else {
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";  
    } else {
         
            document.querySelector("h1").textContent = "Draw";
       }
    };

   /* function refreshPage(){
        location.reload();
        return false;
    } ;
document.querySelector("button").onclick  refreshPage();*/

const reloadButton = document.querySelector("button");

// Добавляем обработчик события 'click' к кнопке
reloadButton.addEventListener('click', () => {
    // Перезагружаем страницу
    window.location.reload();
});










































