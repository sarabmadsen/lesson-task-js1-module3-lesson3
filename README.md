# JavaScript 1 - Module 3

## Lesson Task 3 Questions

### Question 1

Convert the below functions to one-line arrow functions.

```js
function greet(name) {
  return `Hello ${name}!`;
}

function add(a, b) {
  return a + b;
}
```

### Question 2

Convert the below code to use the then/catch syntax instead.

```js
async function getCatFacts() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    const facts = results.all;
    console.log(facts.length);
  } catch (error) {
    console.log(error);
  }
}
```
