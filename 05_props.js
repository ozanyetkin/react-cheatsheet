// Access a Component's props
import React from 'react';

function PropsDisplayer(props) {
    const stringProps = JSON.stringify(props);
    return (
        <div>
            <h1>CHECK OUT MY PROPS OBJECT</h1>
            <h2>{stringProps}</h2>
        </div>
    );
}

import ReactDOM from 'react-dom';
import PropsDisplayer from './PropsDisplayer';

function App() {
    return <PropsDisplayer />;
}

export default App;

// Pass `props` to a Component
function App() {
    return <PropsDisplayer myProp="Hello" />;
}

function PropsDisplayer(props) {
    const stringProps = JSON.stringify(props);
    return (
        <div>
            <h1>CHECK OUT MY PROPS OBJECT</h1>
            <h2>{stringProps}</h2>
        </div>
    );
}

// Render a Component's props
import Product from './Product'

function App() {
    return <Product name="Apple Watch" price={399} rating="4.5/5.0" />;
}

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h3>{props.rating}</h3>
        </div>
    );
}

// Pass props From Component To Component
function Player(props) {
    return (
        <>
            <h1>{props.songName}</h1>
            <h2>{props.artist}</h2>
        </>
    );
}

function App() {
    return (<Player songName="Abhinanda" artist="Machinegewehr" />);
}

// Render Different UI Based on props
function Greeting(props) {
    if (props.signedIn === false) {
        return <h1>GO AWAY</h1>;
    }
    else {
        return <h1>Hi there, {props.name}!</h1>;
    }
}

function App() {
    return <Greeting signedIn={true} name="Yetkin" />;
}


function Greeting(props) {
    if (props.signedIn == false) {
        return <h1>Please login.</h1>;
    }
    else {
        return (
            <>
                <h1>Welcome back, {props.name}!</h1>
                <article>
                    Latest Movie: A Computer Bug's Life
                </article>
            </>
        )
    }
}

function App() {
    return (
        <div>
            <h1>
                MovieFlix
            </h1>
            <Greeting name="Yetkin" signedIn={true} />
        </div>
    );
}

// Put an Event Handler in a Function Component
function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Button onClick={talk} />;
}

// Pass an Event Handler as a prop
function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Button talk={talk} />;
}

// Receive an Event Handler as a prop
function Button(props) {
    return (
        <button onClick={props.talk}>
            Click me!
        </button>
    );
}

// handleEvent, onEvent, and props.onEvent
function Talker() {
    function handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Button onClick={handleClick} />;
}

function Button(props) {
    return (
        <button onClick={props.onClick}>
            Click me!
        </button>
    );
}

// props.children
function BigButton(props) {
    console.log(props.children);
    return <button>I am a Big Button.</button>;
}

function List(props) {
    let titleText = `Favorite ${props.type}`;
    if (props.children instanceof Array) {
        titleText += 's';
    }
    return (
        <div>
            <h1>{titleText}</h1>
            <ul>{props.children}</ul>
        </div>
    );
}

function App() {
    return (
        <div>
            <List type='Living Musician'>
                <li>Sachiko M</li>
                <li>Harvey Sid Fisher</li>
            </List>
            <List type='Living Cat Musician'>
                <li>Nora the Piano Cat</li>
            </List>
        </div>
    );
}

// Giving Default Values to props
function Button(props) {

    return (
        <button>{props.text}</button>
    );
}

Button.defaultProps = {
    text: 'Default Text of Big Button',
};

function App() {
    return <Button text="Defaults are Boring" />;
}

// Review
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>My Colorful App</h1>
            <Button />
            <br />
            <TextField />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
