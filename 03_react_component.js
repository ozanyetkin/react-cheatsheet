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

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
    if (fiftyFifty) {
        return <h1>Tonight I'm going out WOOO</h1>;
    }
    else {
        return <h1>Tonight I'm going to bed WOOO</h1>;
    }
}

function TodaysPlan() {
    let task;
    let apocalypse = false;
    if (!apocalypse) {
        task = 'learn React.js'
    }
    else {
        task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
}

// Event listener and event handler
function SubmitButton() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
}

function MyQuote() {
    return (
        <blockquote>
            <p>
                What is important now is to recover our senses.
            </p>
            <cite>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
                    Susan Sontag
                </a>
            </cite>
        </blockquote>
    );
};

// Authorization form
function App() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Conditional />
        </div>
    );
}

function Conditional() {
    const returnValue = Math.random() < 0.5;
    if (returnValue) {
        return <Secret />;
    }
    else {
        return <Public />;
    }
}

function Secret() {
    return <h1>Secret</h1>;
}

function Public() {
    return <h1>Public</h1>;
}

// Inline style
function App() {
    return (
        <div>
            <h1 style={{ color: 'red' }}>Hello world</h1>
        </div>
    );
}

function Contact() {
    const password = 'swordfish';
    const [authorized, setAuthorized] = useState(false);

    function handleSubmit(e) {
        const enteredPassword = e.target.querySelector(
            'input[type="password"]').value;
        const auth = enteredPassword == password;
        setAuthorized(auth)

        const login = (
            <form action="#" onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="submit"
                />
            </form>
        );

        const contactInfo = (
            <ul>
                <li>
                    client@example.com
                </li>
                <li>
                    555.555.5555
                </li>
            </ul>
        );
    }

    return (
        <div id="authorization">
            <h1>
                {
                    authorized ? 'Contact' : 'Enter the Password'
                }
            </h1>
            {
                authorized ? contactInfo : login
            }
        </div>
    );
}
