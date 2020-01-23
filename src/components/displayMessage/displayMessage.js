import React from "react";

function DisplayMessage(props) {
  return (
    <div>
      <div>message:{props.message}</div>
      <div>username:{props.username}</div>
      <div>data:{props.data}</div>
      <div><button>Likes:{props.likes}</button></div>
    </div>
  );
}


export default DisplayMessage;