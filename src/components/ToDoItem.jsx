import React, { useState } from "react";

function ToDoItem (props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone(prevValue => {
            return !prevValue;
        });

    }

    return (
    <div className="item">
        <div className= "list_content" onClick={handleClick}>
        <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}
            
        </li>
        </div>
        <div className="delete" onClick={ () => {
                props.onChecked(props.id);
            }}>
                <p>❌</p>

            </div>

           
        
       
    </div>
    )
}

export default ToDoItem;