import React, { useState } from "react";

function ToDoItem (props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone(prevValue => {
            return !prevValue;
        });

    }

    return (
    <div className="list_content">
        <div onClick={handleClick}>
        <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}
            
        </li>
        <div className="delete" onClick={ () => {
                props.onChecked(props.id);
            }}>
                <p>❌</p>

            </div>

           
        </div>
       
    </div>
    )
}

export default ToDoItem;