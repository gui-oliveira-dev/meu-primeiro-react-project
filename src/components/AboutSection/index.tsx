import './style.css'
import Title from "./Title";
import SubTitle from "./SubTitle";
import Text from "./Text";
import sections from '../data/sections'

function AboutSection() {
  const { inicio, conteudo } = sections
  return (
    <section className='sections'>
      <Title content={inicio.title}/>
      <Text content={inicio.text} />
      {
        conteudo.map((section) => {
          const { title, text } = section
          return (
            <>
              <SubTitle content={title} />
              <Text content={text} />
            </>
          )
        })
      }
    </section>
  )
}

export default AboutSection