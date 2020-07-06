import React from 'react'
import {connect} from 'react-redux'

const Titulares = ({titulares,quitarTitular}) =>(
    <section>
            {
                titulares.map(e => (
                    <article className="titular">
                        <div style={{padding: '20px',
                                    marginLeft: '100px'}}>
                            <img style={{width: '50px'}}  src={e.foto} alt={e.nombre}/>
                            <button onClick={() => quitarTitular(e)}>X</button>
                        </div>
                    </article>
                ))
            }
    </section>
)

const mapStateToProps = state =>({
    titulares: state.titulares

})
const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type: 'QUITAR_TITULAR',
            jugador
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)