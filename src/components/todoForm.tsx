import React, { Dispatch, SetStateAction, useState } from 'react'
import ToDOService from '../todoService';
import ToDoTypes from '../todo';
import '../CSS/ToDoForm.css'


interface PropTypes{
    setTodos: Dispatch<SetStateAction<ToDoTypes[]>>
}

const ToDOForm:React.FC<PropTypes>=({setTodos})=> {

    const [newToDotext,setNewToDotext] = useState <string>('');
    
    const handleAddToDo = ()=>{
        if(newToDotext.trim() !== ''){
            const newToDo = ToDOService.addTodos (newToDotext);
            setTodos((prevTodos)=>[...prevTodos,newToDo]);
            setNewToDotext('')
        }
    } ;

    

  return (
    <div>
      <div className='inputForm'>
        <input type="text" value={newToDotext} onChange={(e)=> setNewToDotext(e.target.value)} autoFocus={true} placeholder='add to task' />
        <button onClick={handleAddToDo}>add ToDo</button>
      </div>
    </div>
  )
}

export default ToDOForm;
