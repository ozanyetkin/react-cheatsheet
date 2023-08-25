// AppFunction.js
import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };
    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    };

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TasksList allTasks={allTasks} handleDelete={handleDelete} />
        </main>
    );
}

// Update Function Component State
import React, { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState();

    const divStyle = { backgroundColor: color };

    return (
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button onClick={() => setColor('Aquamarine')}>
                Aquamarine
            </button>
            <button onClick={() => setColor('BlueViolet')}>
                BlueViolet
            </button>
            <button onClick={() => setColor('Chartreuse')}>
                Chartreuse
            </button>
            <button onClick={() => setColor('CornflowerBlue')}>
                CornflowerBlue
            </button>
        </div>
    );
}

// Initialize State in a Function Component
import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
    const [color, setColor] = useState('Tomato');

    const divStyle = { backgroundColor: color };

    return (
        <div style={divStyle}>
            <p>Selected color: {color}</p>
            {colorNames.map((colorName) => (
                <button
                    onClick={() => setColor(colorName)}
                    key={colorName}>
                    {colorName}
                </button>
            ))}
        </div>
    );
}

// Use State Setter Outside of JSX
import React, { useState } from "react";

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    const [phone, setPhone] = useState('');

    const handleChange = ({ target }) => {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if (isValid) {
            setPhone(newPhone);
        }
        // just ignore the event, when new value is invalid
    };

    return (
        <div className='phone'>
            <label for='phone-input'>Phone: </label>
            <input value={phone} onChange={handleChange} id='phone-input' />
        </div>
    );
}

// Set from a Previous State Value
import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(0);

    const goBack = () =>
        setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

    const goToNext = () =>
        setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

    const onFirstQuestion = questionIndex === 0;
    const onLastQuestion = questionIndex === questions.length - 1;

    return (
        <nav>
            <span>Question #{questionIndex + 1}</span>
            <div>
                <button onClick={goBack} disabled={onFirstQuestion}>
                    Go Back
                </button>
                <button onClick={goToNext} disabled={onLastQuestion}>
                    Next Question
                </button>
            </div>
        </nav>
    );
}

// Arrays in State
import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
    const [selected, setSelected] = useState([]);

    const toggleTopping = ({ target }) => {
        const clickedTopping = target.value;
        setSelected((prev) => {
            // check if clicked topping is already selected
            if (prev.includes(clickedTopping)) {
                // filter the clicked topping out of state
                return prev.filter(t => t !== clickedTopping);
            } else {
                // add the clicked topping to our state
                return [clickedTopping, ...prev];
            }
        });
    };

    return (
        <div>
            {options.map(option => (
                <button value={option} onClick={toggleTopping} key={option}>
                    {selected.includes(option) ? 'Remove ' : 'Add '}
                    {option}
                </button>
            ))}
            <p>Order a {selected.join(', ')} pizza</p>
        </div>
    );
}

// storeItems.js
export const produce = [
    "Carrots",
    "Cucumbers",
    "Bell peppers",
    "Avocados",
    "Spinach",
    "Kale",
    "Tomatoes",
    "Bananas",
    "Lemons",
    "Ginger",
    "Onions",
    "Potatoes",
    "Sweet potatoes",
    "Purple cabbage",
    "Broccoli",
    "Mushrooms",
    "Cilantro"
];

export const pantryItems = [
    "Chia",
    "Goji berries",
    "Peanut butter",
    "Bread",
    "Cashews",
    "Pumpkin seeds",
    "Peanuts",
    "Olive oil",
    "Sesame oil",
    "Tamari",
    "Pinto beans",
    "Black beans",
    "Coffee",
    "Rice",
    "Dates",
    "Quinoa"
];

// ItemList.js
import React from "react";

export default function ItemList({ items, onItemClick }) {
    const handleClick = ({ target }) => {
        const item = target.value;
        onItemClick(item);
    };
    return (
        <div>
            {items.map((item, index) => (
                <button value={item} onClick={handleClick} key={index}>
                    {item}
                </button>
            ))}
        </div>
    );
}

// GroceryCart.js
import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prev) => {
            return [item, ...prev];
        });
    };

    const removeItem = (targetIndex) => {
        setCart((prev) => {
            return prev.filter((item, index) => index !== targetIndex);
        });
    };

    return (
        <div>
            <h1>Grocery Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li onClick={() => removeItem(index)} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <h2>Produce</h2>
            <ItemList items={produce} onItemClick={addItem} />
            <h2>Pantry Items</h2>
            <ItemList items={pantryItems} onItemClick={addItem} />
        </div>
    );
}

// Objects in State
export default function Login() {
    const [formState, setFormState] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form>
            <input
                value={formState.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
            />
            <input
                value={formState.password}
                onChange={handleChange}
                type="password"
                name="password"
            />
        </form>
    );
}

import React, { useState } from "react";

export default function EditProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={profile.firstName || ''}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="First Name"
            />
            <input
                value={profile.lastName || ''}
                onChange={handleChange}
                type="text"
                name="lastName"
                placeholder="Last Name"
            />
            <input
                value={profile.bday || ''}
                onChange={handleChange}
                type="date"
                name="bday"
            />
            <input
                value={profile.password || ''}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
            />
            <button type="submit">Save Profile</button>
        </form>
    );
}

// Separate Hooks for Separate States
import React, { useState } from "react";

function Musical() {
    const [state, setState] = useState({
        title: "Best Musical Ever",
        actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
        locations: {
            Chicago: {
                dates: ["1/1", "2/2"],
                address: "chicago theater"
            },
            SanFrancisco: {
                dates: ["5/2"],
                address: "sf theater"
            }
        }
    })
}

function MusicalRefactored() {
    const [title, setTitle] = useState("Best Musical Ever");
    const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
    const [locations, setLocations] = useState({
        Chicago: {
            dates: ["1/1", "2/2"],
            address: "chicago theater"
        },
        SanFrancisco: {
            dates: ["5/2"],
            address: "sf theater"
        }
    });
}

// Review
import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});
    };
    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(
            (task) => task.id !== taskIdToRemove
        ));
    };

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TasksList allTasks={allTasks} handleDelete={handleDelete} />
        </main>
    );
}
