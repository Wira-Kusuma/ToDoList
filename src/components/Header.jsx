export default function Header({toggleTheme}) {
  return (
  <header>  
    <h1>To Do</h1>
    <img src="images/icon-moon.svg" alt="moon icon dark mode" onClick={toggleTheme} id='moon'/>
    <img src="images/icon-sun.svg" alt="moon icon dark mode" onClick={toggleTheme} id='sun'/>
  </header>
)
}