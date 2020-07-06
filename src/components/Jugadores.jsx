import React,{Fragment} from 'react'
import {connect} from 'react-redux'

const Jugadores = ({jugadores, agregarTitular,agregarSuplente}) =>(
    
        <Fragment>
                {
                    jugadores.map(e =>(
                                <div class="team text-center" style={{width: '150px',height: '150px'}}>
                                    <div class="card-body">
                                        <img src={e.foto} alt={e.nombre} class="img-fluid rounded-cicrcle w-50"/>
                                    </div>
                                    <button onClick={() => agregarTitular(e)}>Titular</button>
                                </div>
                            
                    ))
                }
    </Fragment>
)

const mapStateToProps = state =>({
    jugadores: state.jugadores

})
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: 'AGREGAR_TITULAR',
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)