'use client'

import  React, {useState} from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type TodoFormProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TodoForm: React.FC<TodoFormProps> = ({tasks, setTasks}) => {

    
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');


    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // validate task field
        if(!(title === '' || title === null)){
            // create new object
            let newTask: Task = {
                id: Date.now(),
                title: title,
                completed: false,
                date: new Date('Y-m-d H:i:s')
            }
            // keep all the previous tasks and add a new one
            setTasks([...tasks, newTask]);

            // push task to array
            tasks.push(newTask);
            
            // save array to localStorage
            if(typeof(window) !== 'undefined'){
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            
            // remove Error
            setError('');

            // clear input field
            setTitle('');

        }else{
            setError('Please fill the task title field !');
            return;
        }
    }

    return ( 
        <form action="#" onSubmit={handleFormSubmit} className="max-w-lg m-auto py-12">
            {error !== '' ? <p className="p-4 bg-red-600/30 text-red-600 rounded-lg mb-4 text-sm">{error}</p> : ''}
            <div className="mb-4">
                <Label htmlFor="todo" className="text-lg font-semibold">Add a new task</Label>
                <Input id="todo" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What do you need to do?" className="mt-2" />
            </div>
            <Button className="bg-orange-600 w-full">Create</Button>
            
        </form>
    );
}
 
export default TodoForm;