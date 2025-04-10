import { Button } from "./ui/button";
import { Trash, Check, X } from "lucide-react"
import {toast} from "sonner"
import { motion } from "framer-motion";

type TaskItemProps = {
    todo: Task,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem:React.FC<TaskItemProps> = ({todo, setTasks}) => {

    const handleDelete = () => {
        const deleteBool = confirm('Are you sure you want to delete this task ?');
        if(deleteBool){
            setTasks(prev => prev.filter(task => task.id !== todo.id)); 
            // show toast
            toast("Task has been deleted.",{
              description: "Task removed from the local storage",
              action:{
                  label:"Close",
                  onClick: () => console.log('close')
              }
            })
        }
    }

    const handleCompleted = () => {
        setTasks(prev => prev.map(task => task.id === todo.id ? {...task, completed: !task.completed} : task ))
        const status = todo.completed;
        // show toast
        toast(!status ? "Well done" : "Not done yet ?",{
          description: !status ? "Task marked as completed" : "Task marked as incomplete !",
          action:{
              label:"Close",
              onClick: () => console.log('close')
          }
        })
    }

    return ( 
      <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: todo.completed ? 0.5 : 1, scale: todo.completed ? 0.95 : 1 }}
          transition={{ duration: 0.3 }}
          className="p-2 border-b border-gray-200 dark:border-zinc-800 w-full max-w-lg flex justify-between items-center h-14 ">
            <div>
              <h1>{todo.title}</h1>
              <small>{todo.date}</small>
            </div>
            

            <div className="gap-2 flex">
              <Button variant="outline" onClick={handleCompleted}>
                {todo.completed ? <X /> : <Check />}
              </Button>  
              <Button variant="outline" onClick={handleDelete}>
                <Trash />
              </Button>
            </div>            
        </motion.div>
    );
}
 
export default TaskItem;