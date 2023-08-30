const tasks = [
  {id: 1,
   name: "estudar javascript", 
   completed: false},

   {id: 2,
   name: "estudar para o projeto",
   completed: false},

   {id: 3,
   name: "pesquisar projeto",
   completed: true
   },
];

function getTasks() {
  return tasks;
}

function addTask( taskName ) {
  const novatarefa = {id: tasks.length + 1, 
  name: taskName, 
  completed: false
  }
  tasks.push(novatarefa)
}

 const removeTask = (taskld) => {
  const index = tasks.findIndex((task) => task.id === taskId)
  tasks.splice(index, 1)
}

const updateTask = (taskId, props) => {
  const index = tasks.findIndex((task) => task.id === taskId)
  tasks[index] = {id: taskId, ...props}
}

export {getTasks, removeTask, addTask, updateTask};