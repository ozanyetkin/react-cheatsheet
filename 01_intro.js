const h1 = <h1>Hello world</h1>;

<p>Hello world</p>;

const myArticle = <article></article>;

const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;

const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
);

const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
        </article>
    </div>
);

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('container');
const root = createRoot(container);

root.render(<h1>Hello world</h1>);
