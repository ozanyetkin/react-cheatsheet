import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);

const myDiv = <div className="big">I AM A BIG DIV</div>

root.render(myDiv)