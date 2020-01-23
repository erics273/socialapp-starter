import React from "react";

function DisplayMessage (props) {
    return (
        <div>
        <div>message:{props.message}</div>
        <div>username:{props.usermane}</div>
        <div>data:{props.data}</div>
      </div>
    );
}
export default DisplayMessage;