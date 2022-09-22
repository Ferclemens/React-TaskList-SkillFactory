import React from 'react'
import Task from './Task'

function TaskList({data}) {
    console.log(data);
    return (
        <div>
        { data.map(({id, task, date, complete},state) => {
            return (<Task 
                key={id}
                id={id} 
                task={task}
                date={date}
                complete={complete}
                stateTask={state}
                />)
            })
        }
        </div>
    )
}

export default TaskList