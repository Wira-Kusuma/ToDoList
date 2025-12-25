import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

const shoppingItem = [
  {
    id: 1,
    name: "Pushup 100 times",
    checked: false,
  },
  {
    id: 2,
    name: "Debugging 12 hours",
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(shoppingItem);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((shoppingItem) => shoppingItem.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((shoppingItem) =>
        shoppingItem.id === id
          ? { ...shoppingItem, checked: !shoppingItem.checked }
          : shoppingItem
      )
    );
  }

  function handleClearItem() {
    if (window.confirm("Delete all task?")) {
      setItems([]);
    }
  }

  //toggle theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect untuk menambah/menghapus class "dark" di element html
  useEffect(() => {
    // Ambil element html (root element)
    const root = document.documentElement;
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");

    // Cek apakah dark mode aktif
    if (isDarkMode) {
      // Jika dark mode aktif, tambahkan class "dark" ke html element
      root.classList.add("dark");
      moon.style.display = "none";
      sun.style.display = "flex";
    } else {
      // Jika light mode, hapus class "dark" dari html element
      root.classList.remove("dark");
      moon.style.display = "flex";
      sun.style.display = "none";
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    // Balik nilai isDarkMode (true jadi false, false jadi true)
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main>
      <Header toggleTheme={toggleTheme} />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearItem={handleClearItem}
      />
    </main>
  );
}
