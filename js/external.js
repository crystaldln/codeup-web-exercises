console.log('Hello from external JavaScript!');

alert("Welcome to my website!");




var userInput = prompt('What is your favorite color?:');
console.log('The user entered: ' + userInput);

alert("Great, my favorite color is " + userInput + " too.");




var lilmer = prompt('How many days did you rent the Little Mermaid?');
console.log('The user entered: ' + lilmer);

var brobear = prompt('How many days did you rent Brother Bear?');
console.log('The user entered: ' + brobear);

var hercules = prompt('How many days did you rent Hercules?');
console.log('The user entered: ' + hercules);

var ppd = prompt('What is the price per day to rent these movies?');
console.log('The user entered: ' + ppd);

var total = (Number(lilmer) + Number(brobear) + Number(hercules)) * Number(ppd)
alert("You owe " + total + " for these movie rentals. ");





var googleRate = prompt('How much did you make at Google?');
var googleHours = prompt('How many hours did you work at Google?');
console.log('The user entered: ' + googleHours);

var amazonRate = prompt('How much did you make at Amazon?');
var amazonHours = prompt('How many hours did you work at Google?');
console.log('The user entered: ' + amazonHours);

var facebookRate = prompt('How much did you make at Facebook?');
var facebookHours = prompt('How many hours did you work at Google?');
console.log('The user entered: ' + facebookHours);

var total = (Number(Google) * 400) + (Number(Amazon) * 380) (Number(Facebook) * 350)
alert("Your total pay this week is $" + ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)))









