'use strict';

//global variable to count correctf answers
var correctResponse = 0;

alert('Welcome to my About Me page'); 
//to gain userName
var userName = prompt ('Hello, what\'s your name?');
console.log('What is your name? : ' + userName);

//Coding experience question
var coding = prompt ('Do I have Coding experience?');
coding = coding.toLowerCase();

if (coding === 'yes' || coding === 'y'){
     alert ('Wrong, ' + userName + ' besides messing with my myspace layouts, I have no previous coding experience.');
     } else if(coding === 'no' || coding === 'n'){
        alert( 'You are RIGHT, I do not have any previous experience.');
        correctResponse++;     
    } else {
            alert('Please respond using yes or no or y or n.');
         }
         console.log('Do I have Coding Experience? : ' + coding);

// Party question
var party = prompt ('Do I like to party like it\'s 1999?');
party = party.toLowerCase();

if (party === 'yes' || party === 'y'){
      alert ('So right about that, ' + userName + ' is all about the experience you won\'t forget!');
      correctResponse++;  
    } else if(party === 'no' || party === 'n'){
        alert( 'Dammm...and I thought we were friends..');
         } else {
          alert('Please respond using yes or no or y or n.');
         }

     console.log('Do I like to party like it\'s 1999? : ' + party);

//College question
var college = prompt ('Did I complete college education?');
college = college.toLowerCase();

if (college === 'no' || college === 'n'){
     alert ('Right again, ' + userName + ' not yet.');
     correctResponse++;  
    } else if(college === 'yes' || college === 'y'){
        alert( 'Nope, I wish, but someday I will go back and finish');
         } else {
          alert('Please respond using yes or no or y or n.');
         }

     console.log('Did I complete college education? : ' + college);

//Middle name question
var middleName = prompt ('Do I have a middle name?');
middleName = middleName.toLowerCase();

if (middleName === 'yes' || middleName === 'y'){
  alert ('That\'s right, ' + userName + ' I do have one.');
  correctResponse++; 
} else if(middleName === 'no' || middleName === 'n'){
  alert( 'Oh man! here I go againg thinking you know me');
} else {
  alert('Please respond using yes or no or y or n.');
}

console.log('Do I have a middle name? : ' + middleName);

//Life
var life = prompt ('Do I believe in the possability of life in outerspace?');
life = life.toLowerCase();

if (life === 'yes' || life === 'y'){
  alert ('Ohh Yeahhh, ' + userName + ' let\'s discuss the topic.');
  correctResponse++; 
} else if(life === 'no' || life === 'n'){
  alert( 'No?!! you must not know much about me.');
} else {
  alert('Please respond using yes or no or y or n.');
}

console.log('Do I believe in the possability of life in outerspace? : ' + life);

//number question

var cupsPerDay = 4;
var cups = prompt('How many cups of coffee did I drink today?');

for (var attempts = 0; attempts < 4; attempts++){
  
  if (cupsPerDay === cups){
    alert ('Thats right');
    correctResponse++; 
    break;
  } else if( cups < cupsPerDay){
    cups = parseInt(prompt ('I needed a little bit more ' + userName));
  } else if (cups === '0'){
    cups = parseInt(prompt( 'I like to have at least one cup a day'));
  } else if (cups > cupsPerDay){
    cups = parseInt(prompt('That\'s too much for me'));
  } else {
    cups = parseInt(prompt('your answer must be a number'));
  }

}
console.log('How many cups of coffee did I drink today? : ' + cups);

//Multiple choice Question
var multipleChoice = ['orange', 'strawberry', 'banana', 'mango', 'pomagranate','cucumber']
var correctAnswer = false;
var guessCounter = 6;

do{
    var fruits = prompt('What is my favorite fruit?');
    
    for(var i = 0; i<multipleChoice.length; i++){
        if(fruits === multipleChoice[i]){
            correctAnswer = true;
            break;
        }
    }
    
    if(correctAnswer){
        alert('You got it right!');
        console.log(fruits);
        correctResponse++;

    } else {
        alert('No, keep guessing');
    } 
    guessCounter--;
} while(guessCounter > 0 && !correctAnswer);

console.log(correctResponse);
alert('You answer ' + correctResponse + ' out of 7 questions correctly');

