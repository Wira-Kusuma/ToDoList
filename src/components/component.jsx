import { useState } from "react";

export function Header({ toggleTheme }) {
  return (
    <header>
      <h1>To Do</h1>
      <img
        src="images/icon-moon.svg"
        alt="moon icon dark mode"
        onClick={toggleTheme}
        id="moon"
      />
      <img
        src="images/icon-sun.svg"
        alt="moon icon dark mode"
        onClick={toggleTheme}
        id="sun"
      />
    </header>
  );
}

export function Form({ onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("do not blank");
      return;
    }
    const newItem = { id: Date.now(), name, checked: false };
    onAddItem(newItem);
    setName("");
  }
  return (
    <form className="add" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add new item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}

export function List({
  items,
  onDeleteItem,
  handleToggleItem,
  handleClearItem,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
        <Control items={items} handleClearItem={handleClearItem} />
      </ul>
    </div>
  );
}

export function Item({ 
    item, 
    onDeleteItem, 
    handleToggleItem 
}) {

    const [active, setActive] = useState(false)
  return (
    <li 
    key={item.id} 
    onMouseEnter={()=>setActive(true)}
    onMouseLeave={()=>setActive(false)}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleToggleItem(item.id)}
        className="checkbox"
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        <p>{item.name}</p>
      </span>
      <img
        src="images/icon-cross.svg"
        alt="close icon"
        onClick={() => onDeleteItem(item.id)}
        style={active ? {opacity:'1'} : {opacity:'0'}}
      />
    </li>
  );
}

export function Control({ items, handleClearItem }) {
  return (
    <li>
      <p>{items.length} item left</p>
      <p onClick={handleClearItem}>Clear items</p>
    </li>
  );
}
