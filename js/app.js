'use strict';
var firstname = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + firstname);
console.log('name', firstname);
var counter = 0;
function question1(userResponse) {
   var questions = [
       [
           'Do i love coding ?',
           'Of course i do',
           'Ops, wrong answer , obada love coding',
       ],
       [
           'which is the most car company obada love ? is BMW?',
           'Of course they do  love BMW',
           'Ops, wrong answer , obada love BMW',
       ],
       [
           'where does obada live ? in Jordan ?',
           'yes obada living in jordan',
           'Ops, wrong annswer , think again ',
       ],
       [
           'when the first time obada drive his first car ? in 2004 ?',
           'correct , will done',
           'Ops, wrong annswer ',
       ],
       [
           'which is the most country do obada love  --is jordan ?',
           'yes they living in jordan ',
           'no ,ohh that`s wrong '
       ],
   ];
   for (var i = 0; i < questions.length; i++) {
       var currentQuestion = questions[i];
       var promptIndex = 0;
       var positiveIndex = 1;
       var negativeIndex = 2;
       var currentPrompt = currentQuestion[promptIndex];
       var userResponse = prompt(currentPrompt);
       userResponse = userResponse.toUpperCase();
       var currentPositiveReply = currentQuestion[positiveIndex];
       var currentNegativeReply = currentQuestion[negativeIndex];
       switch (userResponse) {
           case 'YES':
           case 'Y':
               alert(currentPositiveReply);
              counter ++;
               break;
           case 'NO':
           case 'N':
               alert(currentNegativeReply);
               break;
           default:
               alert(' Wrong Answer!');
       }
   }
   return userResponse;
}
question1();
function q6(age) {
   for (var f = 0; f < 4; f++) {
       var age = prompt("how old is obada ?")
       if (age == 27) {
           alert(" correct answer !");
           counter ++;
           console.log(age);
           break;
       } else if (age > 27) {
           alert("oops , too high");
           console.log(age);
       } else if (age < 27) {
           alert(" oops , too low ");
           console.log(age);
       }
   }
   alert('you are right how you guess the answer ')
   return (age);
}
<<<<<<< HEAD
console.log('love' + love);


var car = prompt('which is the most car company obada love ? is BMW')
car = car.toLowerCase();
if (car == 'yes') {
    alert('Of course they do do');
} else if (car == 'y') {
    alert('Of course they do');
} else if (car == 'no') {
    alert('Ops, wrong annswer , obada love  BMW ');
} else if (car == 'n') {
    alert('Ops, wrong annswer , obada love  BMW ');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}

console.log('car' + car);



var  g1 = prompt('when the first time obada drive his first car ? in 2004 ')
g1 = car.toLowerCase();
if (g1 == 'yes') {
    alert('correct , will done');
} else if (g1 == 'y') {
    alert('correct , will done');
} else if (g1 == 'no') {
    alert('Ops, wrong answer ');
} else if (g1 == 'n') {
    alert('Ops, wrong annswer');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('g1' + g1);


var j2 = prompt('which is the most country do obada love  --is jordan ')
j2 = j2.toLowerCase();
if (j2 == 'yes') {
    alert('good , obada love his country , "jordan"');
} else if (j2 == 'y') {
    alert('good , obada love his country , "jordan"');
} else if (j2 == 'no') {
    alert('Ops, wrong annswer');
} else if (j2 == 'n') {
    alert('Ops, wrong annswer');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}


console.log('j2' + j2);


var d1 = prompt('where does obada live ? in Jordan ')
d1 = d1.toLowerCase();
if (d1 == 'yes') {
    alert('yes obada living in jordan');
} else if (d1 == 'y') {
    alert('yes obada living in jordan');
} else if (d1 == 'no') {
    alert('Ops, wrong annswer, obada live in jordan');
} else if (d1 == 'n') {
    alert('Ops, wrong annswer, obada live in jordan');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('d1' + d1);
=======
q6();
function Question7() {
   var country = ['Maldive', 'Turkey', 'Brazil', 'Jordan-petra', 'New York City, USA', 'Italy'];
   for (var t = 0; t < 5; t++) {
       var chose = prompt('now i sugess a some of my favorite places i plan to travel to them ,Maldive, Turkey, Brazil, Jordan-petra, New York City, USA, Italy ');
       switch (chose) {
           case (country[0]):
           case (country[1]):
           case (country[2]):
           case (country[3]):
           case (country[4]):
               alert(' Now you did a wonderful job you know my favorite places , great job, Maldive ,  Turkey , Brazil ,  Jordan-petra , New York City, USA , Italy');
               counter ++;
               console.log(chose);
               t = 5;
               break;
           default:
               alert("You write down a wrong answer , can you please try again ... ")
               console.log(chose);
               break;
       }
   }
}
Question7();
alert(" You have this point  ")
alert("Thank you  you got this point " + counter );
// console.log('Question7');
>>>>>>> 1388c1b80c98d0216ff2d25a9935b1eadc095cc6
