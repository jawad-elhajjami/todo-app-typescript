import { Button } from "./ui/button";
import { Trash, Check, X } from "lucide-react"

type TaskItemProps = {
    todo: Task,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem:React.FC<TaskItemProps> = ({todo, setTasks}) => {


    const handleDelete = () => {
        const deleteBool = confirm('Are you sure you want to delete this task ?');
        if(deleteBool){
            setTasks(prev => prev.filter(task => task.id !== todo.id)); 
        }
    }

    const handleCompleted = () => {
        setTasks(prev => prev.map(task => task.id === todo.id ? {...task, completed: !task.completed} : task ))
    }

    return ( 
        <div className="p-2 border-b border-gray-200 dark:border-zinc-800 w-full max-w-lg flex justify-between items-center h-14">
            <div>
              <h1>{todo.title}</h1>
            {todo.completed ? <p className="text-sm text-green-600">Done</p> : ''}  
            </div>
            

            <div className="gap-2 flex">
              <Button variant="outline" onClick={handleCompleted}>
                {todo.completed ? <X /> : <Check />}
              </Button>  
              <Button variant="outline" onClick={handleDelete}>
                <Trash />
              </Button>
            </div>
            
        </div>
    );
}
 
export default TaskItem;