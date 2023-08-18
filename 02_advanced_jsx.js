import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);

const myDiv = <div className="big">I AM A BIG DIV</div>

root.render(myDiv)

const profile = (
    <div>
        <h1>John Smith</h1>
        <img src="images/john.png" />
        <article>
            My name is John Smith.
            <br />
            I am a software developer.
            <br />
            I specialize in creating React applications.
        </article>
    </div>
);

root.render(<h1>2 + 3</h1>);
root.render(<h1>{2 + 3}</h1>);

const math = <h1>2 + 3 = {2 + 3}</h1>

root.render(math);

const pi = (
    <div>
        <h1>
            PI, YALL!
        </h1>
        <p>
            {Math.PI.toFixed(20)}
        </p>
    </div>
);

ReactDOM.render(
    pi,
    document.getElementById('app')
);


const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
const gooseImg = <img src={goose} />

root.render(gooseImg);

function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
}

const kitty = (
    <img
        src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
        alt="kitty"
        onClick={makeDoggy} />
);

root.render(kitty);

let message;

if (user.age >= drinkingAge) {
    message = (
        <h1>
            Hey, check out this alcoholic beverage!
        </h1>
    );
} else {
    message = (
        <h1>
            Hey, check out these earrings I got at Claire's!
        </h1>
    );
}

root.render(message);

function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />
}
else {
    img = <img src={pics.doggy} />
}

root.render(img)

img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Sushi Burrito</li>
            <li>Rhubarb Pie</li>
            <li>Nacho Cheez Straight Out The Jar</li>
            <li>Broiled Grapefruit</li>
            {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
        </ul>
    </div>
);

root.render(favoriteFoods);

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person, i) =>
    // expression goes here:
    <li>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>)

peopleList = people.map((person, i) =>
    // expression goes here:
    <li key={'person_' + i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);

const greatestDivEver = React.createElement(
    "div",
    null,
    "i am div"
);

// Animal fun facts
const animals = [
    { name: 'cat', fun_fact: 'Naps all day' },
    { name: 'dog', fun_fact: 'Will eat anything' },
    { name: 'bird', fun_fact: 'Likes to perch on things' }
];

// Create an <ul></ul>:
const animalFacts = (
    <ul>
        {animals.map((animal, i) =>
            <li key={'animal_' + i}>
                The {animal.name} likes {animal.fun_fact}
            </li>
        )}
    </ul>
);

root.render(animalFacts);
