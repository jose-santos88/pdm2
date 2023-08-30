import { addTask, getTasks, removeTask, updateTask } from "./pratica01/tasks";


getTasks().forEach(element => {
  const {id, name, completed} = element;

  console.log(id, name, completed);


});

getTasks().forEach(element => {
  const {id, name, completed} = element;

  console.log(id, name, completed);

addTask("estudar react native");
});

removeTask(2)

updateTask(1, {name: "estudar react", completed: true})