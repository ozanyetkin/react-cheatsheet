import React from 'react';
import { comments } from './commentData';

function Header(props) {
    return (
        <div>
            <img src={props.profileImg}  alt=''/>
            <h1>{props.userName}</h1>
        </div>
    )
}
export default Header;