import './style.css';
console.clear();

import { fromEvent, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const btnA$ = fromEvent(document.getElementById('btnA'), 'click');
const btnB$ = fromEvent(document.getElementById('btnB'), 'click');
const btnC$ = fromEvent(document.getElementById('btnC'), 'click');
const btnD$ = fromEvent(document.getElementById('btnD'), 'click');
const btnE = document.getElementById('btnE');

var greeting = 'Hello World';
var employee = { first: 'George', last: 'Washington' };

var displayA = function (msg) {
  return 'Function A: ' + msg;
};

var displayB = function (msg) {
  return 'Function B: ' + msg;
};

var displayC = function (msg) {
  return 'Function C: ' + msg;
};

var display = function () {
  console.log(employee);
};

var displayObj = function () {
  console.log(employee);
  console.log(greeting);
  greeting = "Update in displayObj";
};

btnE.addEventListener('click',displayObj );

merge(
  btnA$.pipe(mapTo(displayA)),
  btnB$.pipe(mapTo(displayB)),
  btnC$.pipe(mapTo(displayC))
).subscribe((x) => {
  document.getElementById('msg').innerHTML = x(greeting);
  employee.first = 'David';
  employee.last = 'Lam';
  console.log(`${employee.first} ${employee.last}`);
});

btnD$.pipe(mapTo(display)).subscribe((func) => func());
