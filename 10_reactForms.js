// Input onChange
import React, { useState } from 'react';
import styles from './Input.module.css';

function Input() {
    return (
        <>
            <div className={styles.emailContainer}>
                <h2>Let's stay in touch.</h2>
                <p>Sign up for our newsletter to stay up-to-date on the latest products, receive exclusive discounts, and connect with other programmers who share your passion for all things tech.</p>
                <form>
                    <label for="email">Email: </label>
                    <input onChange={handleUserInput} id="email" type="text" />
                </form>
            </div>
            <div className={styles.inputDisplay}>
                <h2>Current User Input: </h2>
                <h4></h4>
            </div>
        </>
    );
}

export default Input;

// Write an Input Event Handler
function Input() {
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }
    return (
        <>
            <div className={styles.emailContainer}>
                <h2>Let's stay in touch.</h2>
                <p>
                    Sign up for our newsletter to stay up-to-date on the latest products,
                    receive exclusive discounts, and connect with other programmers who
                    share your passion for all things tech.
                </p>
                <form>
                    <label for="email">Email: </label>
                    <input id="email" type="text" onChange={handleUserInput} />
                </form>
            </div>
            <div className={styles.inputDisplay}>
                <h2>Current User Input: </h2>
                <h4></h4>
            </div>
        </>
    );
}

function Example() {
    const [userInput, setUserInput] = useState("");
    function handleChange(e) {
        setUserInput(e.target.value);
    }
    return <input onChange={handleChange} type="text" />;
}

// Set the Input's Initial State
function Input() {
    const [userInput, setUserInput] = useState('');
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }
    return (
        <>
            <div className={styles.emailContainer}>
                <h2>Let's stay in touch.</h2>
                <p>
                    Sign up for our newsletter to stay up-to-date on the latest products,
                    receive exclusive discounts, and connect with other programmers who
                    share your passion for all things tech.
                </p>
                <form>
                    <label for="email">Email: </label>
                    <input id="email" type="text" onChange={handleUserInput} />
                </form>
            </div>
            <div className={styles.inputDisplay}>
                <h2>Current User Input: </h2>
                <h4></h4>
            </div>
        </>
    );
}

// Update an Input's Value
function Input() {
    const [userInput, setUserInput] = useState('');
    function handleUserInput(e) {
        setUserInput(e.target.value);
    }
    return (
        <>
            <div className={styles.emailContainer}>
                <h2>Let's stay in touch.</h2>
                <p>
                    Sign up for our newsletter to stay up-to-date on the latest products,
                    receive exclusive discounts, and connect with other programmers who
                    share your passion for all things tech.
                </p>
                <form>
                    <label for="email">Email: </label>
                    <input id="email" type="text" onChange={handleUserInput} value={userInput} />
                </form>
            </div>
            <div className={styles.inputDisplay}>
                <h2>Current User Input: </h2>
                <h4>{userInput}</h4>
            </div>
        </>
    );
}

// Review: Student Form
import React, { useState } from 'react';
import styles from './Form.module.css';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    return (
        <>
            <form>
                <label for="name">Name: </label>
                <input id="name" type="text" onChange={handleNameChange} value={name} />
                <label for="age">Age: </label>
                <input id="age" type="text" onChange={handleAgeChange} value={age} />
            </form>
            <div className={styles.displayContainer}>
                <h2>Student Info:</h2>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
            </div>
        </>
    );
}
