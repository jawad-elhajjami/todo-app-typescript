'use client'
import TaskItem from "./TaskItem";

type TodoListProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList:React.FC<TodoListProps> = ({tasks, setTasks}) => {
    return ( 
       <div>
            <h3 className="text-lg font-semibold text-center">To-do List</h3>
            <div className="flex flex-col items-center mt-8">
                {tasks.length === 0 ? "No tasks to show" : 
                tasks.map((todo, index) => (
                    <TaskItem todo={todo} setTasks={setTasks} key={todo.id} />
                ))}
            </div>
       </div> 
    );
}
 
export default TodoList;