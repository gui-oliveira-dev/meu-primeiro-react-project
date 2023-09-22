import { useState } from 'react'
import './style.css'

function Form() {
  const [name, setName] = useState('')
  const [formState, setFormState] = useState(false)

  
  function handelClick(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (name === '') {
      alert('Você precisa preencher seu nome')
    } else {
      setFormState(true)
    }

  }
  

  return(
    <>
    {!formState || name === '' ? (
      <form className='form' action="">
      <p className='question'>Qual seu Nome?</p>
      <input className='input-name' value={name} onChange={(event) => 
        setName(event.target.value)} placeholder='Digite seu nome aqui' type="text" />
      <p className='question'>De 0 a 5, qual nota você dá para o meu projeto?</p>
      <select className='input-select' name="review" id="">
        <option value="0">0 - Ficou Péssimo</option>
        <option value="1">1 - Não gostuei</option>
        <option value="2">2 - Dá pra melhorar</option>
        <option value="3">3 - Bom</option>
        <option value="4">4 - Muito Bom</option>
        <option selected value="5">5 - Asmei</option>
      </select>
      <button className='btn-submit' onClick={(event) => handelClick(event)} type="submit">Enviar Dados e ver código</button>
    </form>
    ) : (
      <div className='form'>
        <h3 className='result-txt'>Obrigado {name} por avaliar meu projeto, esse é apenas o primeiro de muitos, se você clicar no botão abaixo você vai ser direcionado ao github com o meu código</h3>
        <a className='btn-code' href="https://www.youtube.com.br" target='_blanks'>
          <button>Ver código</button>
        </a>
      </div>
    )}
      
    </>
  )
}

export default Form