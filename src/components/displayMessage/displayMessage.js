import React from "react";

function DisplayMessage(props) {
  return (
    <div>
      <div>message:{props.message}</div>
      <div>username:{props.username}</div>
      <div>data:{props.data}</div>
      <button>Thumps:</button>
      <div>Likes:{props.likes}</div>
      </div>
  );
}


export default DisplayMessage;