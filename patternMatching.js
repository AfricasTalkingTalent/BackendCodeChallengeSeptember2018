const match = require('smatch');
let myMatchFn = (testValue) => match(testValue, function(case_) {
	case_('Geek', 'Howdy geek');
	case_('nerd', 'We love nerds');
	case_(match.typeOf('string'), 'You got some other string ' + testValue);
	case_(match.typeOf('number'), 'You got number ' + testValue);
	case_(match.instanceOf(Date), 'You got a Date');
	case_(match.ANY, 'You got something else');
});

console.log(myMatchFn('Geek')); // => 'You got geek'
console.log(myMatchFn('nerd')); // => 'You got nerd'
console.log(myMatchFn('Galana Plaza, Kilimani!')); // => 'You got some other string a string!'
console.log(myMatchFn(2)); // => 'You got number 2'
console.log(myMatchFn(new Date())); // => 'You got a date!'
console.log(myMatchFn({foo: 'bar', baz: 12})); // => 'You got something else'