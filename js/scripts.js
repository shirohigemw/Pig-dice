// var play1="";
// var play2="";
//
// var diceRoll = function () {
//   return Math.floor(6*Math.random())+1;
// }
// the plus one makes sure that you dont get a random decimal between 0 and 1
// (which is impossible in dice,so we remove it as a possibility)
// .floor rounds it off to the nearest integer

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


function printNumber(number) {
  var placeholder = document.getElementById('result1');
  placeholder.innerHTML = number;
}

var button = document.getElementById('p1');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


function printNumber(number) {
  var placeholder = document.getElementById('result2');
  placeholder.innerHTML = number;
}

var button = document.getElementById('p2');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
