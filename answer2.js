function getCatFacts() {
    fetch("https://cat-fact.herokuapp.com/facts")
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
            const facts = results.all;
            console.log(facts.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCatFacts();

// with arrow functions
function getCatFacts2() {
    fetch("https://cat-fact.herokuapp.com/facts")
        .then((response) => response.json())
        .then((results) => {
            const facts = results.all;
            console.log(facts.length);
        })
        .catch((error) => console.log(error));
}

getCatFacts2();
