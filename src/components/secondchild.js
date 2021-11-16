import React from "react";
import './seconchild.css';

const Secchild = (props) => {
var content = props.data;

    return(
        <div className="sec_container m-5 p-5 ">
            <div className="sec_title">
                {content[0]}
            </div>
            <div className="sec_content">
                {content[1]}
            </div>
        </div>
    )
}

export default Secchild;