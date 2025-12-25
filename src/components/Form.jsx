import { useState } from "react";

export default function Form({onAddItem}) {
  const [name, setName]  = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!name) {
      alert("do not blank")
      return;
    }
    const newItem = {id:Date.now(), name, checked:false }
    onAddItem(newItem);
    setName("");
  }
  return(
    <form className='add' onSubmit={handleSubmit}>
      <input type="text" placeholder='add new item' value={name} onChange={(e) => setName(e.target.value)}/>
    </form>
  )
}