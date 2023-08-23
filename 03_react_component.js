// app.js
import React from 'react';

function App() {
    return <h1>Hello again, World!</h1>;
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
    document.getElementById('app')
).render(<App />);

function MyComponent() {
    return <h1>Hello, this is a function component body.</h1>;
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);

function QuoteMaker() {
    return (
        <blockquote>
            <p>
                The world is full of objects, more or less interesting; I do not wish to add any more.
            </p>
            <cite>
                <a target="_blank"
                    href="https://en.wikipedia.org/wiki/Douglas_Huebler">
                    Douglas Huebler
                </a>
            </cite>
        </blockquote>
    );
};

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

function RedPanda() {
    return (
        <div>
            <h1>Cute Red Panda</h1>
            <img
                src={redPanda.src}
                alt={redPanda.alt}
                width={redPanda.width} />
        </div>
    );
}

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
    return (
        <div>
            <h1>{owl.title}</h1>
            <img src={owl.src} alt={owl.title} />
        </div>
    );
}

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys! Wait Up!",
        src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
];

// New function component starts here:
function Friend() {
    const friend = friends[2];
    return (
        <div>
            <h1>{friend.title}</h1>
            <img src={friend.src} />
        </div>
    );
}

