import React from 'react';

function Picture() {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
    return (
        <>
            <Picture />
            <h1>Name: Octavia</h1>
            <h2>Species: Octopus</h2>
            <h2>Class: Cephalopoda</h2>
        </>
    )
}

export default Profile;

// Apply a Component in a Render Function
function NavBar() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
        return (
            <a href={'/' + page}>
                &nbsp;{page}
            </a>
        )
    });

    return <nav>{navLinks}</nav>;
}


function ProfilePage() {
    return (
        <div>
            return <NavBar />;
            <h1>All About Me!</h1>
            <p>I like movies and blah blah blah blah blah</p>
            <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
        </div>
    );
}

// Review
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>My Favorite Animals</h1>
            <ul>
                <li>Octopus</li>
                <li>Sloth</li>
                <li>Red Panda</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);