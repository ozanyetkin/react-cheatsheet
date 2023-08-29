// Create Container Component
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const GUINEAPATHS = [
    "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigs() {
    const [currentGP, setCurrentGP] = useState(0);
    const [favoriteGP, setFavoriteGP] = useState(0);
    const src = GUINEAPATHS[currentGP];

    const favoriteChangeHandler = (event) => {
        setFavoriteGP(parseInt(event.target.value));
    }

    const resetFavoriteHandler = () => {
        setFavoriteGP(0);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentGP(prevGP => {
                const nextGP = prevGP + 1;
                return nextGP % GUINEAPATHS.length;
            });
        }, 5000)
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
                <h1>Cute Guinea Pigs</h1>
                <img alt="Guinea Pigs Slideshow" src={src} className={currentGP === favoriteGP ? "favorite" : ""} />
            </div>
            <div data-testid="guineaPigsForm" id="guineaPigsForm">
                <label>Choose Your Favorite Guinea Pig:
                    <select value={favoriteGP} onChange={favoriteChangeHandler}>
                        <option value="0">Alex</option>
                        <option value="1">Izzy</option>
                        <option value="2">Brandon</option>
                        <option value="3">DJ</option>
                    </select>
                </label>
                <button onClick={resetFavoriteHandler}>Reset Favorite</button>
            </div>
        </>
    );
}

export default GuineaPigs;

// Render Presentational Components in Container Component 
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";

function GuineaPigsContainer() {
    const [currentGP, setCurrentGP] = useState(0);
    const [favoriteGP, setFavoriteGP] = useState(0);
    const src = GUINEAPATHS[currentGP];

    const favoriteChangeHandler = (event) => {
        setFavoriteGP(parseInt(event.target.value));
    }

    const resetFavoriteHandler = () => {
        setFavoriteGP(0);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentGP(prevGP => {
                const nextGP = prevGP + 1;
                return nextGP % GUINEAPATHS.length;
            });
        }, 5000)
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP} />
            <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler} />
        </>
    );
}

// Video Player
import React from 'react';
import ReactDOM from 'react-dom';
// import { Video } from './Video';
// import { Menu } from './Menu';

// Video stateless component
class Video extends React.Component {
    render() {
        return (
            <div>
                <video controls autostart autoPlay muted src={this.props.src} />
            </div>
        );
    }
}

// Menu stateless component
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const text = e.target.value;
        this.props.chooseVideo(text);
    }

    render() {
        return (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
        );
    }
}

// App stateful component
const VIDEOS = {
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: VIDEOS.fast };
        this.chooseVideo = this.chooseVideo.bind(this);
    }

    chooseVideo(newVideo) {
        this.setState({ src: VIDEOS[newVideo] });
    }

    render() {
        return (
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={this.chooseVideo} />
                <Video src={this.state.src} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));