import './Main.css';
import './'
import axios from 'axios';
import Header from './components/Header'
import { useState } from 'react';

export default function Main() {
  const [cep, setCep] = useState('')

  const teste = (e)=>{
    try {
      e.preventDefault();
      axios(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        // setCep(response.data)
        console.log(response.data);
      })
      setCep('')
    } catch (error) {
      
    }
  }

  return (
    <div className="container">
      <Header />
      <main>
        <h1>Aqui na <span>Omnix Net</span> você encontra os melhores planos de internet.</h1>
        <div className="form-container">
          <form onSubmit={teste}>
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