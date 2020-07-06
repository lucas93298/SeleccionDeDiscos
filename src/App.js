import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import Fondo from './img/cancha.jpeg'
const App = () =>(
    <Provider store={store}>
    <div className="content d-flex flex-column align-items-center" style={{backgroundImage: 'linear-gradient(to right top, #000000, #21100e, #361c0d, #412d03, #3e4300, #3e4300, #3e4300, #3e4300, #412d03, #361c0d, #21100e, #000000',height: '100vh'}}>
        <div className="d-flex" style={{background: 'black', width: '90vw', height: '20vh',borderRadius: '20px'}}>
            <Jugadores/>
        </div>
        <div className="content-cancha" style={{width: '1000px', height: '500px',backgroundImage: `url(${Fondo})`,
                    backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
                        <div className="content-titulares">
                        <EquipoSeleccionado            
            />
                        </div>
            </div>    
        </div>   
    </Provider>
)
 
export default App