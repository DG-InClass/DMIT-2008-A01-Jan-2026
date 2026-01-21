// ~/src/A/ad-hoc.js
// node --watch ad-hoc.js
const log = console.log;

log('Ad-Hoc JavaScript Review');
log('========================');
log();

// Create a constant called person and assign it the
// value of an object literal
const person = {
    firstName: 'Stewart',
    lastName: 'Dent',
    // 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get formalName() {
        return `${this.lastName}, ${this.firstName}`;
    },
    sayHello(toSomeone = 'World') {
        return `Hello ${toSomeone}`;
    }
}
person.fullName = 'bob'; // didn't "do" anything
log(person);
log(`The person variable is: ${person.fullName}`);
log(`${person.fullName} says ${person.sayHello('class')}`);

// a detour to JSON....
log();
let info = JSON.stringify(person, null, 4);
log(info);
let obj = JSON.parse(info);
obj.fullName = 'Robert';
log(obj);

console.clear(); // comment this out to see prior output

// Destructure syntax works by assigning the
// matching member names from the object on the
// right of the assignment to the variables
// declared on the left of the assignment.
const { firstName, lastName, fullName } = person;
/*
const firstName = person.firstName;
const lastName = person.lastName;
*/
// import { doSomething } from './api/doApiCalls.js';


log(`firstName is ${firstName}`);

// We can also use destructuring with Arrays
const names = ['Stew Dent', 'Anna Lyst', 'Phoe Nominal'];

const [client, analyst, programmer] = names;
// Destructuring an array "unpacks" the values
// in the names array based on their POSITION.

log(analyst, 'and', programmer, 'are working for', client);
log();

const oddOutputs = (first, second, third, fourth) => {
    log(`${first} | ${third}`);
}

// Use the spread operator with my array to call oddOutputs
oddOutputs(...names);
// outOutputs(names[0], names[1], name[3])

// A rest parameter appears in a function declaration.
// It's a way to allow and indefinite number of
// parameters to be sent into a function.
log('I can call the sum function:', sum(8, 21));
// function declaration: are "hoisted" by the JRE
function sum(...values) {
    // because the parameter values is declared as a
    // rest parameter, that means it will be an array
    let total = 0;
    for (const singleValue of values) {
        total += singleValue;
    }
    return total;
}

// function call:
let result = sum(5, 3, 2, 7);
log(result);
