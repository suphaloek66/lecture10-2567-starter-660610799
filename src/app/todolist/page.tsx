"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Task from "@/components/Task";
import TaskInput from "@/components/TaskInput";
import { nanoid } from "nanoid";
import { useState } from "react";

import { TaskType } from "@/libs/types";

export default function Todolist() {
  //tasks = array of {id: string, title: string, complete: boolean}
  const [tasks, setTasks] = useState<TaskType[]>([]);

  //create 1st load state variable

  //add useEffect runs at first and after tasks is updated

  // add new task with specified title
  const addTask = (newTaskTitle: string) => {
    const newTask = { id: nanoid(), title: newTaskTitle, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  // delete a task by task id
  const deleteTask = (taskId: string) => {
    // const newTasks = tasks.filter((task) => task.id !== taskId);
    // setTasks(newTasks);

    // Using "functional update form" of setTasks
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleDoneTask = (taskId: string) => {
    //structuredClone will copy an array or an object "deeply"
    //So objects within an object will be copied too
    const newTasks = structuredClone(tasks);

    //search for a task based on condition
    const task = newTasks.find((x) => x.id === taskId);

    if (task !== undefined) {
      task.completed = !task.completed;
      setTasks(newTasks);
    }
  };

  const doneLength = tasks.filter((task) => task.completed).length;

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* Task summary */}
        <p className="text-center text-secondary fst-italic">
          All ({tasks.length}) Done ({doneLength})
        </p>
        {/* task input */}
        <TaskInput addTaskFunc={addTask} />

        {/* tasks mapping*/}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Chayanin Suatap" studentId="650610560" />
    </div>
  );
}
