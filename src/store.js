import {createStore} from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        foto: 'https://www.nacionrock.com/wp-content/uploads/room-on-fire.jpg'
    },
    {
        id: 2,
        foto: 'https://simetriamusical.files.wordpress.com/2013/09/am-arctic-monkeys.jpg'
    },
    {
        id: 3,
        foto: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Bicicleta_%28album%29.jpg/220px-Bicicleta_%28album%29.jpg'
    },
    {
        id: 4,
        foto: 'https://images-na.ssl-images-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg'
    },
    {
        id: 5,
        foto: 'https://i.pinimg.com/originals/b2/4f/4e/b24f4e6deb4dcb0a2b3c63c465dd1f87.jpg'
    },
    {
        id: 6,
        foto: 'https://images-na.ssl-images-amazon.com/images/I/61hw9WloObL._SY355_.jpg'
    },
    {
        id: 7,
        foto: 'https://www.elquintobeatle.com/wp-content/uploads/2017/06/radiohead-ok-computer-1-1068x1068.jpg'
    },
    {
        id: 8,
        foto: 'https://www.elquintobeatle.com/wp-content/uploads/2016/08/pearl-jam-ten-1-1068x1068.jpg'
    }

],
    titulares: []
}
const reducerEntrenador = (state = initialState,action) =>{
    if(action.type === 'AGREGAR_TITULAR' && state.titulares.length < 5){
        return{
            ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
        
    }
    if(action.type === 'QUITAR_TITULAR'){
        return{
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
        }
        
    }
    return state
}

export default createStore(reducerEntrenador)