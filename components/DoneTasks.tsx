import TaskItem from "./TaskItem";
type DoneTasksProps = {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
const DoneTasks:React.FC<DoneTasksProps> = ({tasks, setTasks}) => {
    return ( 
        <div className="mt-4">
            <h3 className="text-center mt-8 font-semibold text-lg">Done tasks</h3>
            <div className="mt-2 flex flex-col items-center">
                {
                    tasks.map((task) => task.completed ? <TaskItem todo={task} setTasks={setTasks} key={task.id} /> : '')
                }
            </div>
        </div>
    );
}
 
export default DoneTasks;