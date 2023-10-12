import React,{useState} from 'react';
import './TodoList.css';

const TodoList=()=>{
    const [items, setItems]=useState([]);
    const [newItem, setNewItem]=useState('');
    const [editItem, setEditItem]=useState(null);

    const addItem=()=>{
        if(editItem !==null){
            const updatedItems=[...items];
            updatedItems[editItem]=newItem;
            setItems(updatedItems);
            setNewItem('');
            setEditItem(null);
        }
        else{
            setItems([...items,newItem]);
            setNewItem('');
        }
    };
    const editedItem=(index)=>{
        setNewItem(items[index]);
        setEditItem(index);
    }
    const deleteItem=(index)=>{
        const updatedItems=items.filter((_,i)=>i !==index);
        setItems(updatedItems);
        setEditItem(null)
    };

    return(
        <div className='todo'>
            <div className='input'>
            <input id='input' type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)} placeholder='Enter New Item'/>
            <button id='add-button' onClick={addItem}>{editItem !==null? 'update':'Add'}</button>
            </div>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        {item}
                       
                        <button className='button1' onClick={()=> deleteItem(index)}>Delete</button>
                        <button className='button2' onClick={()=> editedItem(index)}>Edit</button>
                     
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;