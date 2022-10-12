import './styles.css'
import '../../global.css'
import {XCircle} from 'phosphor-react'

export default function Offers({modalCards, setModalCards, address}){
    return(
        <>
        {modalCards &&
            <div className="container">
                <XCircle size={40} 
                        title="Fechar"
                        alt="Fechar ofertas"
                        className="btn-close" 
                        onClick={()=>setModalCards(false)}/>
                <div className="container-cards">
                    <div className="card">
                        <h2>15 Mega</h2>
                        <p>R$ 79,90/mês</p>
                        <span>-Consumo Ilimitado</span>
                        <span>-100% Fibra Óptica</span>
                        <span>-Consulte Disponibilidade</span>
                    </div>
                    <div className="card">
                        <h2>25 Mega</h2>
                        <p>R$ 89,90/mês</p>
                        <span>-Consumo Ilimitado</span>
                        <span>-100% Fibra Óptica</span>
                        <span>-Consulte Disponibilidade</span>
                    </div>
                    <div className="card">
                        <h2>40 Mega</h2>
                        <p>R$ 99,90/mês</p>
                        <span>-Consumo Ilimitado</span>
                        <span>-100% Fibra Óptica</span>
                        <span>-Consulte Disponibilidade</span>
                    </div>
                </div>
                <div className="container-address-button">
                    <div className="address">
                        <p>Logradouro: {address.logradouro}</p>
                        <p>Complemento: {address.complemento}</p>
                        <p>Bairro: {address.bairro}</p>
                        <p>Localidade: {address.localidade}</p>
                        <p>UF: {address.uf}</p>
                        <p>DDD: {address.ddd}</p>
                    </div>
                    <button onClick={()=>setModalCards(false)}>Ops, errei meu cep!</button>
                </div>
            </div>   
        }
        </>
    )
}