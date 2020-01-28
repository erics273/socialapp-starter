import React from "react";

function DisplayLike(props) {
    return (
        <div>
            <div>Like</div>
            <div>username: {props.likeInfo.username}</div>
            <div>date: {props.likeInfo.createdAt}</div>
        </div>
    );
}
export default DisplayLike;