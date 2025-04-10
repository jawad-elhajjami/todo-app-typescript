import TaskItem from "./TaskItem";
import { AnimatePresence, motion } from "framer-motion";

type DoneTasksProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const DoneTasks:React.FC<DoneTasksProps> = ({tasks, setTasks}) => {
    return ( 
        <div className="mt-4">
            <h3 className="text-center mt-8 font-semibold text-lg">Done tasks</h3>
            <div className="mt-2 flex flex-col items-center max-w-lg m-auto">
                <AnimatePresence>
                    {
                        tasks.map((task) => task.completed ? 
                            <motion.div
                                key={task.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <TaskItem todo={task} setTasks={setTasks} key={task.id} /> 
                            </motion.div>
                        : '')
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}
 
export default DoneTasks;