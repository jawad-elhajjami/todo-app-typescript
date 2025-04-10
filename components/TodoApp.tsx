'use client'
import React, {useState, useEffect} from "react"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
const TodoApp = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        if(typeof(window) !== 'undefined'){
            const stored = localStorage.getItem('tasks');
            return stored ? JSON.parse(stored) : []
        }
        return [];
    })
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])
    return ( 
        <div>
            <TodoForm tasks={tasks} setTasks={setTasks} />
            <TodoList tasks={tasks} setTasks={setTasks }/>
        </div>    
    );
}
 
export default TodoApp;