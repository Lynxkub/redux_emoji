const INITIAL_STATE = {mood : ':)'}

const moodChanger = (state=INITIAL_STATE , action) => {
    switch (action.type) {
        case 'HAPPY' :
            return {...state , mood :':)' }
        case 'SAD' :
            return {...state , mood: ':('}
        case 'WINKY' :
            return {...state , mood:';)'}
        default: 
            return state
    }
}



const store = Redux.createStore(moodChanger);