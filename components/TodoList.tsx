'use client'
import TaskItem from "./TaskItem";
import { Notebook } from "lucide-react"

type TodoListProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList:React.FC<TodoListProps> = ({tasks, setTasks}) => {
    return ( 
       <div>
            <h3 className="text-lg font-semibold text-center">To-do List</h3>
            <div className="flex flex-col items-center mt-8">
                {tasks.filter(task => !task.completed).length === 0 ? 
                    <div className="flex flex-col items-center ">
                        <Notebook className="w-20 h-20 mb-4 text-gray-200 dark:text-zinc-800" />
                        <p className="opacity-50">You're all done for today !</p>
                    </div> : 
                tasks.map(todo => (
                    !todo.completed ? <TaskItem todo={todo} setTasks={setTasks} key={todo.id}  /> : ''
                ))}
            </div>
       </div> 
    );
}
 
export default TodoList;