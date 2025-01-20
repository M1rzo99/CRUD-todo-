import React, { useState } from 'react'
import ToDoTypes from '../todo'
import ToDOService from '../todoService'
import { FaCheck, FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import ToDOForm from './todoForm';
import '../CSS/ToDoList.css'

export default function ToDOList() {

    const [todos,setTodos] = useState<ToDoTypes[]>(ToDOService.getTodos());
    const [editingToDoID, setEditedToDoID] = useState<number | null>(null);
    const [editedToDoText,setEditedToDoText] = useState<string>("");

    // Functions for handling edit actions
    const handleEditStart = (id:number, text:string)=>{
        setEditedToDoID(id);
        setEditedToDoText(text);
    }

    const handleEditCancel = ()=>{
        setEditedToDoID(null);
        setEditedToDoText("");
    }

    const handleEditSave = (id:number)=>{
        if(editedToDoText.trim() !== ''){
            const updateToDo = ToDOService.updateToDos({
                id,
                text:editedToDoText,
                completed:false
            });

            setTodos((prevTodos) => prevTodos.map((todo)=>(todo.id == id ? updateToDo : todo)));

            setEditedToDoID(null);
            setEditedToDoText("");
        }
    };
    // !Function delete TODO
    const handleDelToDo = (id:number)=>{
        ToDOService.delToDOs(id);
        setTodos((prevTodos)=> prevTodos.filter((todo)=>todo.id !== id))
    }


  return (
    <div className='todoContainer'>

      <div>
       <ToDOForm setTodos = {setTodos}/>
      </div>

      {todos.map((todo)=>(
        <div className='items' key={todo.id}>

            {editingToDoID == todo.id ? (
                <div className='editText'>

                    <input type="text" value={editedToDoText} onChange={(e)=>setEditedToDoText (e.target.value)} autoFocus={true} />

                    <button onClick={()=>handleEditSave(todo.id)}>
                        <FaCheck/>
                    </button>

                    <button className='cancelbtn' onClick={()=> handleEditCancel()}>
                        <FaEdit/>
                    </button>

                </div>
            ):(
            <div className='editBtn'>
                 <span>{todo.text}</span>
                 <button onClick={()=> handleEditStart(todo.id, todo.text)}>
                    <FaEdit/>
                 </button>
            </div>
            )}

            <button onClick = {()=> handleDelToDo(todo.id)}>
                <RiDeleteBin5Fill/>
            </button>
        </div>
      ))}
    </div>
  )
}
