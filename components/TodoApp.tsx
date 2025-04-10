'use client'
import React, {useState, useEffect} from "react"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import DoneTasks from "./DoneTasks"
const TodoApp = () => {
    const [hydrated, setHydrated] = useState(false);
    const [tasks, setTasks] = useState<Task[]>(() => {
        if(typeof(window) !== 'undefined'){
            const stored = localStorage.getItem('tasks');
            setHydrated(true);
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
            {hydrated ? <TodoList tasks={tasks} setTasks={setTasks }/> :  <div 
                className="mt-8 w-16 h-16 border-4 border-orange-600    border-t-transparent rounded-full animate-spin mx-auto mb-4">
            </div>}
            {tasks.filter(task => task.completed).length > 0 ? <DoneTasks tasks={tasks} setTasks={setTasks} /> : ''}
        </div>
    );
}
 
export default TodoApp;