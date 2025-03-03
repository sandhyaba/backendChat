# JavaScript Style Guide

#### General rules
- Anything in this document is law.
- All code will go through a code review before it is merged to Master.
- Always be looking for things which break the styleguide and fix them
- Before you request a code review, do a self-review to make sure it complies with the styleguide
- you will not be able to commit changes if lint errors exist. fix lint errors to commit changes
- Any time you modify an API endpoint, make sure you update the postman.
- Functions/methods should do only 1 thing. If you need to do more than 1 thing, extract one of the things to another function.

#### Keep the code style consistent
If you happen upon code that does not comply with the style guide, update it.
Try to keep your code consistent with the rest of the code within the file.

#### No dead code in github
```javascript
// The following is unacceptable. NEVER comment out code and submit it.
// Just delete it. The only exception is if you are going to re-enable within
// a few days. In which case, add a comment stating so, with a date.

//for (let i = 0; i < 10; i++) {
//  console.info(i);
//}

//good
// Note(ankit): disabled on 2/15/19 for a demo. Should be re-enabled after
//doCheckout();
```

#### TODOs
Should include the authors name in parenthesis:
```javascript
// bad
// TODO do something

// TODO(Ankit): do something
```
#### Naming conventions
- Always stay consistent.
- Always use descriptive names
- Camelcase with the first letter lower case
- Classes always start with an upper case.
- Methods start with a lower case
```javascript
let Example_Name = 3; // bad
let examplename = 3; // bad
let example_name = 3; // bad
let ExampleName = 3; // bad

let exampleName = 3; // good
```

#### Quotes
Always use single quotes
```javascript
let x = "hello"; // bad
let y = 'world'; // good
```

## Semicolons ARE required!
```javascript
let x = "hello" // bad
let y = 'world'; // good

// bad
let z = {
    'prop': 'val'
}

// good
let z = {
    'prop': 'val'
}
```

#### Don't use var anymore
```javascript
// bad
var example = 42;
// good
let example = 42;
```
#### Arrow functions are preferred
```javascript
// bad
[1, 2, 3].map(function (x) {
  // do something
});

// good
[1, 2, 3].map((x) => {
  // do something
});
```
#### Use template strings instead of concatenation
```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}
// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}
// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
#### One line per declaration
```javascript
// bad
let a = 1, b = 2, c = 3;
// good
let a = 1;
let b = 2;
let c = 3;
```
