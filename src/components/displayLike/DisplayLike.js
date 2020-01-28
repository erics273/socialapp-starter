import React from "react";

function DisplayLike(props) {
    return (
        <div>
            <div>Like</div>
            <div>username: {props.username}</div>
            <div>date: {props.date}</div>
        </div>
    );
}
export default DisplayLike;