import { useState } from "react";
import { Task } from "./task-interface";

export default function CommonTasks() {
    const [tasks, setTasks] = useState([]);
    
    const taskList = tasks.map(task => 
        <li>
            
        </li>
    )
}