import './style.css'
import { NavLink } from 'react-router-dom';

function Header () {
  return (
  <header className="header">
    <h1>Hello World!</h1>
    <nav className='menu'>
      <NavLink className='nav-link' to='/'>Início</NavLink>
      <NavLink className='nav-link' to='/'>Meus Projetos</NavLink>
      <NavLink className='nav-link' to='/'>Sobre Mim</NavLink>
      <NavLink className='nav-link' to='/asdhuasdkj'>Tragetória Trybe</NavLink>
    </nav>
  </header>
  )
}

export default Header;