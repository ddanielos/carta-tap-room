import './Nav.css'

const Nav = ({ handleBeersClick, handleFoodClick }) => {
  return (
    <nav>
      <li className="container-menu">
        <ul className="menu" onClick={handleBeersClick}>BEERS</ul>
        <ul className="menu" onClick={handleFoodClick}>FOOD</ul>
      </li>
    </nav>
  )
}

export default Nav;