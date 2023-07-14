import React, { useState } from 'react'
import './Main.css'

const Main = () => {

    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

    const insertItem = (e) =>{
        setItem(e.target.value);
    };
    
    const addItem = () =>{
        setList([...list, item])
        setItem("")
    }

    const deleteItem = (id) =>{
        setList(list.filter((arr , i) => {
            return (i!==id);}))
    }

  return (
    <div>
        <div className='mainDiv'>
            <div className='component'>
                <h1>To Do List</h1>
                <br/>
                <input type='text' placeholder='Add Items' onChange={insertItem} value={item}/>
                <button className='addBtn' onClick={addItem}> + </button>
                <br/>
                <ol>
                    {list.map((a, id)=>{
                        return(
                            <div className='toDoList' key={id}>
                                <li>{a}</li>
                                <button className='deleteBtn' onClick={() => deleteItem(id)}>Done</button>
                            </div>
                        )
                    })}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Main