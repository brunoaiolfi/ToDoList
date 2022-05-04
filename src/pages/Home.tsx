import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const tempTasks = tasks.map((task) => ({ ...task }));

    if (!tempTasks) return;
    if (tempTasks) {
      tempTasks.map((item) => {
        if (item.id === id) item.done = !item.done;
      });
    }

    setTasks(tempTasks);
  }

  function handleRemoveTask(id: number) {
    const tempTasks = tasks.filter((item) => item.id !== id);
    setTasks(tempTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
