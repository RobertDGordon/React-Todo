import React from "react";

const Todo = props => {

    let classNamer = 'item';
    if (props.item.completed){
        classNamer = classNamer + "-completed";
    }

    const handleClick = () => {
        props.toggleCompleted(props.item.id)
    }

    return (
        <>
        <div onClick={handleClick} className={classNamer}>
            <p>{props.item.task}</p>
        </div>
        </>
    )
}

export default Todo;