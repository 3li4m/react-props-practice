import React from "react";

function Avatar(props){
    return (
        <img className="circle-img"
        src={props.avatar}
        alt="avatar_img"
        />
    );
}

export default Avatar;