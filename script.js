// Question 1

const greet = (name) => `Hello ${name}!`;

const add = (a, b) => a + b;


// Question 2


function getCatFacts2() {

    fetch("https://cat-fact.herokuapp.com/facts")
    
        .then((response) => response.json())
        .then((results) => {
            console.log(results.length);
        })
        .catch((error) => console.log(error));

}

getCatFacts2();

