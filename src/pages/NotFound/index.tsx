import { Link } from "react-router-dom";
import './style.css'

function NotFound() {
  return (
    <div className="not-found" >
      <h1>Página Não encontrada</h1>
      <h2>Oops! Parece que você se perdeu, clique no botão abaixo para voltar ao início</h2>
      <Link to='/'>
        <button>Voltar ao início</button>
      </Link>
    </div>
  )
}

export default NotFound;
