// PageTitleFunction.js
import React, { useState, useEffect } from 'react';

export default function PageTitle() {
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Hi, ${name}`;
    }, [name]);

    return (
        <div>
            <p>Use {name} input field below to rename this page!</p>
            <input
                onChange={({ target }) => setName(target.value)}
                value={name}
                type='text' />
        </div>
    );
}

// Function Component Effects
import React, { useState, useEffect } from 'react';

function PageTitle() {
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Hi, ${name}`;
    });

    return (
        <div>
            <p>Use the input field below to rename this page!</p>
            <input onChange={({ target }) => setName(target.value)} value={name} type='text' />
        </div>
    );
}

import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert(`Count: ${count}`);
    });

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

// Clean Up Effects
import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);

    const increment = () => setClickCount((prev) => prev + 1);

    useEffect(() => {
        document.addEventListener('mousedown', increment);
        return () => {
            document.removeEventListener('mousedown', increment);
        };
    });

    return (
        <h1>Document Clicks: {clickCount}</h1>
    );
}

// Control When Effects Are Called
import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleChange = ({ target }) => setName(target.value);

    return (
        <>
            <h1>Time: {time}</h1>
            <input value={name} onChange={handleChange} type='text' />
        </>
    );
}

// Fetching Data
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Forecast() {
    const [data, setData] = useState(null);
    const [notes, setNotes] = useState({});
    const [forecastType, setForecastType] = useState('/daily');

    useEffect(() => {
        alert('Requested data from server...');
        get(forecastType).then((response) => {
            alert('Response: ' + JSON.stringify(response, '', 2));
            setData(response.data);
        });
    }, [forecastType]);

    const handleChange = (itemId) => ({ target }) =>
        setNotes((prev) => ({
            ...prev,
            [itemId]: target.value
        }));

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className='App'>
            <h1>My Weather Planner</h1>
            <div>
                <button onClick={() => setForecastType('/daily')}>5-day</button>
                <button onClick={() => setForecastType('/hourly')}>Today</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Avg Temp</th>
                        <th>Precip</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.summary}</td>
                                <td> {item.temp.avg}°F</td>
                                <td>{item.precip}%</td>
                                <td>
                                    <input
                                        value={notes[item.id] || ''}
                                        onChange={handleChange(item.id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

// Rules of Hooks
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState({});

    useEffect(() => {
        get('/categories').then((response) => {
            setCategories(response.data);
        });
    }, []);

    useEffect(() => {
        if (selectedCategory && !items[selectedCategory]) {
            get(`/items?category=${selectedCategory}`).then((response) => {
                setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
            });
        }
    }, [items, selectedCategory]);

    if (!categories) {
        return <p>Loading..</p>;
    }

    return (
        <div className='App'>
            <h1>Clothes 'n Things</h1>
            <nav>
                {categories.map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </nav>
            <h2>{selectedCategory}</h2>
            <ul>
                {!items[selectedCategory]
                    ? null
                    : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

// Separate Hooks for Separate Effects
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        get('/menu').then((response) => {
            setMenu(response.data);
        });
    }, []);

    const [newsFeed, setNewsFeed] = useState(null);
    useEffect(() => {
        get('/news-feed').then((response) => {
            setNewsFeed(response.data);
        });
    }, []);

    const [friends, setFriends] = useState(null);
    useEffect(() => {
        get('/friends').then((response) => {
            setFriends(response.data);
        });
    }, []);

    return (
        <div className='App'>
            <h1>My Network</h1>
            {!menu ? (
                <p>Loading..</p>
            ) : (
                <nav>
                    {menu.map((menuItem) => (
                        <button key={menuItem}>{menuItem}</button>
                    ))}
                </nav>
            )}
            <div className='content'>
                {!newsFeed ? (
                    <p>Loading..</p>
                ) : (
                    <section>
                        {newsFeed.map(({ id, title, message, imgSrc }) => (
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{message}</p>
                                <img src={imgSrc} alt='' />
                            </article>
                        ))}
                    </section>
                )}
                {!friends ? (
                    <p>Loading..</p>
                ) : (
                    <aside>
                        <ul>
                            {friends
                                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                                .map(({ id, name, isOnline }) => (
                                    <li key={id} className={isOnline ? 'online' : 'offline'}>
                                        {name}
                                    </li>
                                ))}
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    );
}
