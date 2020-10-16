'use strict';

var firstname = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + firstname);
console.log('name', firstname);
document.write('<h1>' + firstname + '</h1>');
var counter = 0;


// var love = prompt('Do obada love coding?');
// love = love.toLowerCase();
// if (love == 'yes') {
//     alert('Of course they do');
// } else if (love == 'y' || love== 'yes') {
//     alert('Of course they do');
// } else if (love == 'no') {
//     alert('Ops, wrong annswer , obada love coding');
// } else if (love == 'n') {
//     alert('Ops, wrong annswer , obada love coding');
// }
// else {
//     alert('please refresh the page and re enter the yes or no answers');
// }
// console.log('love' + love);


// var car = prompt('which is the most car company obada love ? is BMW');
// car = car.toLowerCase();
// if (car == 'yes') {
//     alert('Of course they do do');
// } else if (car == 'y') {
//     alert('Of course they do');
// } else if (car == 'no') {
//     alert('Ops, wrong annswer , obada love  BMW ');
// } else if (car == 'n') {
//     alert('Ops, wrong annswer , obada love  BMW ');
// }
// else {
//     alert('please refresh the page and re enter the yes or no answers');
// }

// console.log('car' + car);

function question1(userResponse) {


  var questions = [
    [
      'Do I love coding ?',
      'Of course I do',
      'Ops, wrong answer , obada love coding'
    ],
    [
      'which is the most car company obada love ? is BMW?',
      'Of course they do  love BMW',
      'Ops, wrong answer , obada love BMW'
    ],
    [
      'where does obada live ? in Jordan ?',
      'yes obada living in jordan',
      'Ops, wrong annswer , think again '
    ],
    [
      'when the first time obada drive his first car ? in 2004 ?',
      'correct , will done',
      'Ops, wrong annswer '
    ],
    [
      'which is the most country do obada love  --is jordan ?',
      'yes they living in jordan ',
      'no ,ohh that`s wrong '
    ]

  ];



  for (var i = 0; i < questions.length; i++) {

    var currentQuestion = questions[i];
    var promptIndex = 0;

    var positiveIndex = 1;

    var negativeIndex = 2;

    var currentPrompt = currentQuestion[promptIndex];

    // eslint-disable-next-line no-redeclare
    var userResponse = prompt(currentPrompt);

    userResponse = userResponse.toUpperCase();
    // console.log("sdasd", userResponse);
    var currentPositiveReply = currentQuestion[positiveIndex];

    var currentNegativeReply = currentQuestion[negativeIndex];

    switch (userResponse) {

    case 'YES':
    case 'Y':
      alert(currentPositiveReply);
      counter++;
      break;

    case 'NO':
    case 'N':
      alert(currentNegativeReply);
      break;

    default:
      alert(' Wrong Answer!');
    }

  }
  document.write('<h1>' + userResponse + '</h1>');
  return userResponse;

}
question1();


function q6(age) {
  for (var f = 0; f < 5; f++) {
    // eslint-disable-next-line no-redeclare
    age = prompt('how old is obada ? Please Make sure to enter a number');
    // console.log('j2' + j2);

    if (age > 27) {
      alert('oops , too high');
      console.log(age);
    } else if (age < 27) {
      alert(' oops , too low ');
      console.log(age);
    // eslint-disable-next-line eqeqeq
    }else if (age == 27) {
      alert(' correct answer !');
      counter++;
      console.log(age);
      break;
    }
    else{
      alert('Make sure to enter a number');
    }
  }
  alert('you are right how you guess the answer ');
  document.write('<h1>' + age + '</h1>');

  return (age);

}
q6();
function question7() {
  var country = ['Maldive', 'Turkey', 'Brazil', 'Jordan-petra', 'New York City', 'USA', 'Italy'];
  for (var t = 0; t < 6; t++) {
    var chose = prompt('now i sugess a some of my favorite places i plan to travel to them ,Maldive, Turkey, Brazil, Jordan-petra, New York City, USA, Italy ');
    switch (chose) {
    case (country[0]):
    case (country[1]):
    case (country[2]):
    case (country[3]):
    case (country[4]):
    case (country[5]):
    case (country[6]):
      alert(' Now you did a wonderful job you know my favorite places , great job, Maldive ,  Turkey , Brazil ,  Jordan-petra , New York City, USA , Italy');
      counter++;
      console.log(chose);
      t = 6;

      break;

    default:
      alert('You write down a wrong answer , can you please try again ... ');
      console.log(chose);
      break;

    }
    document.write('<h1>' + chose + '</h1>');
  }

}
question7();
alert('congrats ' + (firstname) + ' you got this score  ' + counter + '/7'  );