import ToDoTypes from "./todo";
const LOCAL_STORAGE_KEY = 'todos';
const ToDOService = {


    getTodos: (): ToDoTypes[]=>{
        const todoStr =  localStorage.getItem(LOCAL_STORAGE_KEY)
        return todoStr? JSON.parse(todoStr) : [];
    },


    addTodos: (text:string): ToDoTypes=>{
        const todos = ToDOService.getTodos();
        const newTODo:ToDoTypes =  {id:todos.length + 1, text, completed:false};
        const updatesToDos = [...todos,newTODo];
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updatesToDos));
        return newTODo
    },


        updateToDos: (todo:ToDoTypes): ToDoTypes=>{
            const todos = ToDOService.getTodos();
            const updateToDos = todos.map((t)=>(t.id === todo.id ? todo : t));
            localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateToDos));
            return todo
        },


        delToDOs:(id:number):void=>{
    const todos = ToDOService.getTodos();
    const updateToDos = todos.filter((todo)=> todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updateToDos));
        }
}

export default ToDOService;