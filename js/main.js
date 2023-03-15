const {createApp} = Vue;

class ToDos{
    constructor(task){
        this.task = task;
        this.isDone = false;
    }
}

const tasks = ['Go to the Doctor', 'Buy milk', "Go to granpa's house", 'Play Soccer'];

const tasksObj = tasks.map((task)=> new ToDos(task));

createApp({
    data(){
        return{
            toAddTask: '',
            pageTitle: 'TodoList',
            todos: tasksObj,
        }
    },
    methods:{
        removeTodo(index){
            this.todos.splice(index, 1);
        },
        addTask(){
            if(this.toAddTask.trim() !== ''){
                this.todos.push(new ToDos(this.toAddTask));
                this.toAddTask = '';
            }
        },
        changeStatus(index){
            if(this.todos[index].isDone){
                this.todos[index].isDone = false;
            }else{
                this.todos[index].isDone = true;
            }
        }
    }
}).mount('#app');