'use strict';
// while (!user) {
//     user = prompt('What is your name? Really, we need to know your name .');
//   }  
//   alert('you have ' + userPoints + ' points.');
var firstname = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + firstname);
console.log('name', firstname);

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



// var userPoints = 0;
// var userPoints= prompt("please enter a number "); 
// if (answer === 'yes' || answer === 'y') {
//     userPoints++;
//   } else {
//     alert('no it`s not the number you entered re try again and make sure you input a number ');
//   }

//   alert('you have ' + userPoints + ' points.');

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

var age = prompt('how old are obada  ?')
age = age.toLowerCase();
if (age == 'yes') {
    alert('Yes obada old 27 ');
    counter++;

} else if (age == 'y') {
    alert('Yes obada old 27 correct you got 1 point');
    counter++;
} else if (age == 'no') {
    alert('Ops, wrong answer , obada older than ');
} else if (age == 'n') {
    alert('Ops, wrong answer , ');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('age' + age);

var age = prompt('how old is obada ?');
for (let k = 0; k < 3; k++) {
    if (age > 27) { alert('too high'); }
    else if (age < 27) { alert('too short'); }
    else {
        alert('Correct answer ,keep going');
        counter++;
        break;
    }
    age = prompt('great , now we know how old is obada ');
}

for (let l = 0; l < 6; l++) {
    var cars = prompt('What is favorite  Cars  ? ,BMW ,Toyota  ,Nissan, mercedes,  tesla,  volvo,');
    if (cars == 'BMW' || cars == 'Toyota' || cars == 'Nissan' || cars == 'mercedes' || cars == 'tesla' || cars == 'volvo') {
        alert('correct answer, keep going');
        counter++;
    } else {
        alert('wrong answer , try again ...');
    }
}

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
            var counter = 0;
            counter = counter + 1;
            console.log(chose);
            t = 5;

            break;

        default:
            alert("You write down a wrong answer , can you please try again ... ")
            console.log(chose);
            break;
    }
}
alert(" You have this point  " + counter)
alert("Thank you  for visit my website " + user);


/*var love = prompt('Do obada love coding?')
love = love.toLowerCase();
if (love == 'yes') {
    alert('Of course they do');
} else if (love == 'y') {
    alert('Of course they do');
} else if (love == 'no') {
    alert('Ops, wrong annswer , obada love coding');
} else if (love == 'n') {
    alert('Ops, wrong annswer , obada love coding');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('love' + love);


var love = prompt('which is the most car company obada love ? is BMW')
love = love.toLowerCase();
if (love == 'yes') {
    alert('Of course they do do');
} else if (love == 'y') {
    alert('Of course they do');
} else if (love == 'no') {
    alert('Ops, wrong annswer , obada love  BMW ');
} else if (love == 'n') {
    alert('Ops, wrong annswer , obada love  BMW ');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}

console.log('love' + love);



var love = prompt('when the first time obada drive his first car ? in 2004 ')
love = love.toLowerCase();
if (love == 'yes') {
    alert('correct , will done');
} else if (love == 'y') {
    alert('correct , will done');
} else if (love == 'no') {
    alert('Ops, wrong answer ');
} else if (love == 'n') {
    alert('Ops, wrong annswer');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('love' + love);


var love = prompt('which is the most country do obada love  --is jordan ')
love = love.toLowerCase();
if (love == 'yes') {
    alert('good , obada love his country , "jordan"');
} else if (love == 'y') {
    alert('good , obada love his country , "jordan"');
} else if (love == 'no') {
    alert('Ops, wrong annswer');
} else if (love == 'n') {
    alert('Ops, wrong annswer');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}


console.log('love' + love);


var love = prompt('where does obada live ? in Jordan ')
love = love.toLowerCase();
if (love == 'yes') {
    alert('yes obada living in jordan');
} else if (love == 'y') {
    alert('yes obada living in jordan');
} else if (love == 'no') {
    alert('Ops, wrong annswer, obada live in jordan');
} else if (love == 'n') {
    alert('Ops, wrong annswer, obada live in jordan');
}
else {
    alert('please refresh the page and re enter the yes or no answers');
}
console.log('love' + love); */