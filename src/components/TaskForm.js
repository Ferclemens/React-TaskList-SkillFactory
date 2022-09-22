import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import '../styles/TaskForm.css'

function TaskForm() {
    const [countId, setCountId] = useState(1)
    const [text, setText] = useState('')
    const [complete, setComplete] = useState(false)
    const [tasks, setTasks] = useState([
    {
        id: 1, 
        task: 'tarea hardcodeada',
        date: '09-10-2022',
        complete: false,
    }])
    const tipeText = (e) => {
        setText(e.target.value)
    }
    const submitTask = (e) => {
        const date = new Date();
        const [month, day, year] = [date.getMonth(), 
                                    date.getDate(), 
                                    date.getFullYear()];
        e.preventDefault()
        setTasks([{
            id: countId,
            task: text,
            date: `${day}-${month+1}-${year}`,
            complete: complete
        },...tasks])
        e.target.reset()
    }
    const setId = () => {
        setCountId(countId + 1)
    }
    const setState = () => {
        setComplete(!complete)
    }
    useEffect(() => {
        setId()
    },[tasks])

    //console.log(text);
    //console.log(tasks);
  return (
    <div className='container'>
        <form className='formContainer' onSubmit={submitTask}>
            <input className='formInput' type='text' placeholder='To do' onChange={tipeText}></input>
            <button className='formButton' type='submit'>Add</button>
        </form>
        <TaskList data={tasks} state={setState}/>
    </div>
  )
}

export default TaskForm