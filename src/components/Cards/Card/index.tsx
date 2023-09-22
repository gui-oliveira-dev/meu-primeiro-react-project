import './style.css'

type propTypes = {
  nome: string
  img: string
  descrição: string
  link: string
}

function Card(props: propTypes) {
  const { nome, img, descrição, link } = props
  return (
    <a href={link} target='_Blank'>
      <div className='card'>
        <h2 className='title'>{nome}</h2>
        <img className='image' src={img} alt={`Logotipo do ${nome}`} />
        <p className='description'>{descrição}</p>
      </div>
    </a>
  )
}

export default Card