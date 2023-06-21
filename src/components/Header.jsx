import "./Header.css"
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <>
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <div className="contentTitle">
        <h1 className="title">MENU</h1>
        <h2 className="slogan">beers & food</h2>
      </div>
    </div>
    </>
  )
}

export default Header;