import React from 'react';
import styles from './TitleScreen.module.css'

function TitleScreen() {
    return (
        <>
            <div className={styles.menuWrapper}>
                <div className={styles.menuTop}>
                    <div>
                        <h1>Bread First Search</h1>
                    </div>
                </div>
                <div className={styles.menuBottom}>
                    <p>
                        Think you've got a great eye? Challenge yourself to hunt down slices of bread hidden in a maze!
                    </p>
                    <button className={styles.btn}>Play</button>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import StyleDemo from './StyleDemo'

const myStyle = {
    background: 'lightblue',
    color: 'darkblue'
}

function StyleDemo() {
    return (
        <>
            <h1
                style={{
                    background: 'lightgreen',
                    color: 'darkgreen'
                }}
            >Style This With Inline Styling</h1>
            <h1 style={myStyle}>Style This With Style Object Variable</h1>
        </>
    );
}

function App() {
    return <StyleDemo />;
}

export default App;

// Style syntax
const myStyle2 = {
    background: 'lightblue',
    color: 'darkblue',
}

function StyleDemo() {
    return <button style={myStyle2}>button</button>
}


function App() {
    return <StyleDemo />;
}

// Multiple Stylesheets
function AttentionGrabber() {
    return (
        <>
            <h1 className={styles.h1}>Hi! Welcome to my portfolio.</h1>
            <p>I'm a developer who likes designing user-friendly websites.</p>
        </>
    )
}

function Home() {
    return (
        <div className={styles.div}>
            <AttentionGrabber />
            <footer>Codey Cademy: Full-Stack Developer</footer>
        </div>
    );
}

// Styling Rock, Paper, Scissors
import React, { useState } from "react";
import styles from "./Games.module.css";

const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
];

const choiceStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: 40
};

const emojiStyles = {
    fontSize: 64,
    marginRight: 20
};

const nameStyles = {
    margin: 0,
    fontSize: 24,
    color: "#ffff"
};

const resultStyle = {
    marginTop: 40,
    fontSize: 48,
    color: "#ffff"
};

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [codeyChoice, setCodeyChoice] = useState(null);
    const [result, setResult] = useState(null);

    function handlePlayerChoice(choice) {
        const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayerChoice(choice);
        setCodeyChoice(codeyChoice);
        if (choice.name === codeyChoice.name) {
            setResult("Tie!");
        } else if (
            (choice.name === "rock" && codeyChoice.name === "scissors") ||
            (choice.name === "paper" && codeyChoice.name === "rock") ||
            (choice.name === "scissors" && codeyChoice.name === "paper")
        ) {
            setResult("You win!");
        } else {
            setResult("You lose!");
        }
    }

    function resetGame() {
        setPlayerChoice(null);
        setCodeyChoice(null);
        setResult(null);
    }

    return (
        <div className={styles.container}>
            <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>
            <div className={styles.choices}>
                {CHOICES.map((choice) => (
                    <button
                        className={styles.button}
                        key={choice.name}
                        onClick={() => handlePlayerChoice(choice)}
                        aria-label={choice.name}
                    >
                        {choice.emoji}
                    </button>
                ))}
            </div>
            {playerChoice && codeyChoice && (
                <div className={styles.results}>
                    <div style={choiceStyles}>
                        <span style={emojiStyles}>{playerChoice.emoji}</span>
                        <p style={nameStyles}>You chose {playerChoice.name}</p>
                    </div>
                    <div style={choiceStyles}>
                        <span style={emojiStyles}>{codeyChoice.emoji}</span>
                        <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
                    </div>
                    <h2 style={resultStyle}>{result}</h2>
                    <button className={styles.button} onClick={resetGame}>Play again</button>
                </div>
            )}
        </div>
    );
}
