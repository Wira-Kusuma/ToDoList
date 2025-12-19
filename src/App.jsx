import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';


const shoppingItem= [
  {
    id:1342342,
    name:"kentang 5",
    checked:false
  },  
]


 export default function App() {
  const [items, setItems] = useState(shoppingItem);

  function handleAddItem(item) {
    setItems([...items, item]);
  }
  return(
    <main>
      <Header />
      <Form onAddItem={handleAddItem}/>
      <List items={items}/>
    </main>
  )

}

function Header() {
  return <h1>ToDoList</h1>
}

function Form({onAddItem}) {
  const [name, setName]  = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!name) {
      alert("do not blank")
      return;
    }
    const newItem = {name, checked:false, id:Date.now()}
    onAddItem(newItem);
    setName("");
  }
  return(
    <form className='add' onSubmit={handleSubmit}>
      <input type="text" placeholder='add new item' value={name} onChange={(e) => setName(e.target.value)}/>

      <button type="submit" >add</button>
    </form>
  )
}


function List({items}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({item}) {
  return(
    <li key={item.id}>
      <input type="checkbox"/>
      <span style={item.checked ? {textDecoration:"line-through"} : {} }>
        {item.name}
      </span>
    </li>
  )
}