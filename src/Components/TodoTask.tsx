import React, { useState, useEffect } from "react";
import { ITask } from "../Interfaces";
import trashIcon from "./icons8-trash.svg";
import CountdownTimer from "./CountdownTimer";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  useEffect(() => {
    if (isCompleted) {
      setIsFrozen(true);
    } else {
      setIsFrozen(false);
    }
  }, [isCompleted]);
  return (
    <div className="task">
      <div
        className="content"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setIsCompleted(!isCompleted)}
      >
        <span
          className={`task-name ${isCompleted ? "completed" : ""}`}
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            backgroundColor: isCompleted ? "green " : "",
          }}
        >
          {" "}
          {hovered ? "Done" : task.taskName}
        </span>
        <span
          className={`task-name ${isCompleted ? "completed" : ""}`}
          style={
            {
              //textDecoration: isCompleted ? "line-through" : "none",
            }
          }
        >
          {" "}
          <CountdownTimer initialHours={task.deadline} isFrozen={isFrozen} />
        </span>
      </div>
      <button
        onClick={() => completeTask(task.taskName)}
        className="button-icon"
      >
        <img src={trashIcon} alt="trash-icon" style={{ height: "30px" }} />
      </button>
    </div>
  );
};

export default TodoTask;
