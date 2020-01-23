import React from 'react';

function ProfileDisplay(props){
    return (
        <div>
          <div>username:{props.username}</div>
          <div>displayName:{props.displayName}</div>
          <div>about:{props.about}</div>
        </div>
    )
}

export default ProfileDisplay;