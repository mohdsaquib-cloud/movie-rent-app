import React from "react";
const Like = ({ onClick, liked }) => {
    let classes = "fa fa-heart";
    if (!liked === true) classes += "-o";
    return (
        <i
            style={{ cursor: "pointer" }}
            onClick={onClick}
            className={classes}
            aria-hidden="true"
        ></i>
    );
};

export default Like;
