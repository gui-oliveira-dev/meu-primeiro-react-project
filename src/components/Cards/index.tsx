import './style.css'
import Card from "./Card"
import cards from "../data/cardData"

function Cards() {
  return (
    <>
      <div className='cards'>
        {cards.map((card) => {
          const { nome, img, descrição, link } = card
          return (
            <Card key={nome} link={link} nome={nome} img={img} descrição={descrição} />
          )
        })}
      </div>
    </>
  )
}

export default Cards