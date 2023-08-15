import React from "react";
import { Task } from "../models/Task";
import {
  AiFillDelete,
  AiFillCheckCircle,
  AiFillBackward,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTask, moveTask } from "../store/slices/tasksSlice";

// interface AllTasks extends Task {
//   // tasks: Task[],
//   // setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
// }

const TaskItem: React.FC<Task> = ({ id, description, isDone }) => {
  // for use of deleting tasks
  const dispatch = useDispatch();

  // to handle deleting task
  const removeTask = () => {
    dispatch(deleteTask(id));
  };

  // to toggle completing and activating task
  const completeTask = () => {
    const payload = {
      id,
      isDone: !isDone,
    };

    dispatch(moveTask(payload));
  };

  return (
    <div
      role="task-item"
      className="w-full bg-yellow-300 transform transition-all hover:outline-2 hover:outline-black duration-500 p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className={`font-medium ${isDone ? "line-through" : ""}`}>
            {description}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* Delete Task Section */}
          <span onClick={removeTask} data-testid="delete-button">
            <AiFillDelete />
          </span>

          {/* Toggle Complition section */}
          <div onClick={completeTask} data-testid="complete-button">
            {!isDone && (
              <span>
                <AiFillCheckCircle />
              </span>
            )}
            {isDone && (
              <span>
                <AiFillBackward />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
