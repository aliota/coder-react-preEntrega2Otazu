import "./menu.css"

function Menu() {
  return (
    <nav className="menu w-100">   
        <ul className="w-100">
            <li>
                <a href="#">Menú salados</a>
            </li>
            <li>
                <a href="#">Postres</a>
            </li>
            <li>
                <a href="#">Vegetariano</a>
            </li>
        </ul>       
    </nav>
  )
}

export default Menu