import './style.css'

const name = 'Guilherme'

function Header () {
  return (
  <header className="header">
    <h1>Hello World</h1>
    <h2>
      {`Seja bem Vindo ${name}!`}
    </h2>
  </header>
  )
}

export default Header;