const {createApp} = Vue;

class ToDos{
    constructor(task){
        this.task = task;
        this.isDone = true;
    }
}

const tasks = ['Go to the Doctor', 'Buy milk', "Go to granpa's house", 'Play Soccer'];

const tasksObj = tasks.map((task)=> new ToDos(task));

createApp({
    data(){
        return{
            pageTitle: 'TodoList',
            todos: tasksObj,
        }
    }
}).mount('#app');