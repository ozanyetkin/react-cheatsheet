import React from 'react';
import { comments } from './commentData';
import Card from './Cards';

function App() {
    return (comments.map(comment => <card commentObject={comment} />))
}

export default App;