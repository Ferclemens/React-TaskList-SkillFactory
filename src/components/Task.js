import React, { useState } from "react"
import { AiOutlineCheckSquare } from "react-icons/ai"
import '../styles/Task.css'

const Task = ({id, task, date, complete},stateTask) => {
    const [show, setShow] = useState(true)
    
    
    console.log(show);
    const closeWindow = () => {
        setShow(!show)
    }
    let card =  <div className="taskContainer">
                    <button className="buttonClose" onClick={closeWindow}>X</button>
                    <input type='check' className="buttonCheck" onClick={() => stateTask}/>
                    <div className="taskData">
                        <h3>{`${id}`}</h3>
                        <p>{`Complete: ${complete}`}</p>
                        <p>{`Fecha: ${date}`}</p>
                    </div>
                    <h5 className="task">{`${task}`}</h5>
                </div>
    
    let action = show ? card : <></>
   
    return (action)
}
export default Task