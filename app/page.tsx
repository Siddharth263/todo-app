"use client";

import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSelector, useDispatch } from "react-redux";

import { Kalam } from "next/font/google";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2Icon } from "lucide-react";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

import { addTask, removeTask, toggleTask } from "@/redux/slices/todo-slices";

const Home = () => {
  // const getTasksFromLocalStorage = () => {
  //   const storedTasks = localStorage.getItem("tasks");
  //   return storedTasks ? JSON.parse(storedTasks) : [];
  // };

  // const tasks1 = useSelector((state: any) => state.tasks);

  const tasks = useSelector((state: any) => state.tasks);
    // getTasksFromLocalStorage().length == 0
    //   ? tasks1
    //   : getTasksFromLocalStorage();


  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [placeholder, setNewPlaceholder] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      alert("No task mentioned, please type at least 1 character");
      return;
    } else if (tasks.find((task: any) => task.title === newTask)) {
      alert("Task already added");
      return;
    }

    dispatch(addTask(newTask));
  };

  const handleRemoveTask = (id: string, title: string) => {
    dispatch(removeTask(id));
    toast({
      description: "Task:" + title + " has been removed",
    });
  };

  const { toast } = useToast();

  const handleStatusChange = (taskId: string, selectedStatus: string) => {
    dispatch(toggleTask({ taskId, status: selectedStatus }));
    setNewPlaceholder(selectedStatus);
    toast({
      description: "Status changed to: " + selectedStatus,
    });
  };

  let timeoutId: NodeJS.Timeout;
  const delayedHandleStatusChange = (
    taskId: string,
    selectedStatus: string
  ) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handleStatusChange(taskId, selectedStatus);
    }, 2000);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-fuchsia-500 to-violet-500">
        <nav className="p-4">
          <p className={cn("font-semibold text-4xl", font.className)}>
            Todo App
          </p>
        </nav>
      </header>
      <main className="px-10 mt-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex border-2 items-center rounded-full justify-center p-6 gap-x-6">
          <Input
            size={60}
            type="text"
            className={cn(
              "text-lg rounded-lg p-6 transition-shadow focus:outline-none focus:shadow-2xl w-3/6",
              font.className
            )}
            placeholder="Add your tasks here"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            className={cn(font.className)}
            onClick={handleAddTask}
            variant="add"
            size="custom"
          >
            Add Task
          </Button>
        </div>
        <div className="border-x-2 border-t-2 flex justify-center rounded-lg mt-5 px-10">
          <p className={cn("text-xl p-6 font-bold", font.className)}>
            Todo List
          </p>
        </div>
        <div className="flex justify-center p-2">
          <div className="border-t-2 w-3/5"></div>
        </div>
        <div className="border-x-2 border-b-2 rounded-lg">
          {tasks.length <= 0 ? (
            <>
              <p
                className={cn(
                  "text-3xl p-6 flex items-center justify-center",
                  font.className
                )}
              >
                Seems like you are done with all of your task
              </p>
            </>
          ) : (
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="w-[100px] text-white">Id</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Task Name</TableHead>
                    <TableHead className="text-center text-white">
                      Delete
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task: any, index: number) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{index}</TableCell>
                      <TableCell className="border-x-2  justify-center w-1/4">
                        <Input
                          className={cn(font.className)}
                          placeholder={
                            placeholder !== "" ? placeholder : "Pending"
                          }
                          onChange={(e) =>
                            delayedHandleStatusChange(task.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="text-justify">
                        {task.title}
                      </TableCell>
                      <TableCell
                        onClick={() => handleRemoveTask(task.id, task.title)}
                        className="border-l-2 cursor-pointer transition-colors hover:bg-red-600 hover:text-white"
                      >
                        <div className="flex justify-center">
                          <Trash2Icon />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
