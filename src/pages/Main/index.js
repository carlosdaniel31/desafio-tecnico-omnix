import './styles.css';
import '../../global.css'
import axios from 'axios';
import Header from '../../components/Header'
import Offers from '../../components/Offers'
import { useState } from 'react';

export default function Main() {
  const [cep, setCep] = useState('')
  const [modalCards, setModalCards] = useState(false)
  const [address, setAddress] = useState([])

  const handleSubmitForm = (e)=>{
    if(!cep){
       return alert('O campo CEP deve ser preenchido!')
    }
    try {
      e.preventDefault();
      axios(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        setAddress(response.data)
        setModalCards(true)
      })
      setCep('')
    } catch (error){
    }
  }

  return (
    <div className="container">
      <Header />
      <main>
        <Offers 
        modalCards={modalCards}
        setModalCards={setModalCards}
        address={address}
        />
        <h1>Aqui na <span>Omnix Net</span> você encontra os melhores planos de internet.</h1>
        <div className="form-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Por favor, informe seu CEP</h4>
            <input value={cep} 
                  onChange={(e)=>setCep(e.target.value)}
                  placeholder="Digite seu CEP"></input>
            <button>Avançar</button>
          </form>
        </div>
      </main>  
    </div>
  );
}