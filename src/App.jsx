import { useState } from 'react'
import './index.css'

 export default function App() {
  return(
    <main>
      <Header />
      <Add />
      <List />
    </main>
  )

}

function Header() {
  return <h1>Shopping list</h1>
}

function Add() {
  const [name, setName]  = useState("");
  const [quantity, setQuantity]  = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!name || !quantity) alert("do not blank"); return;
    const newItem = {name, quantity, checked:false, id:Date.now()}
    console.log(newItem);
    setName("")
    setQuantity("")
  }
  return(
    <form className='add' onSubmit={handleSubmit}>
      <input type="text" placeholder='add' value={name} onChange={(e) => setName(e.target.value)}/>

      <input type="number" placeholder='quantity' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
      <button>add</button>
    </form>
  )
}

const shoppingItem= [
  {
    id:1,
    name:"kentang",
    quantity:2,
    checked:false
  },
  {
    id:2,
    name:"ayam paha", 
    quantity:1,
    checked:false
  },
  {
    id:3,
    name:"darah ayam",
    quantity:5,
    checked:false
  },
]
function List() {
  return (
    <div className='list'>
      <ul>
        {shoppingItem.map((item) => (
          <Item item={item} key={item.key} />
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
        {item.name} {item.quantity}
      </span>
      <button>&times;</button>
    </li>
  )
}