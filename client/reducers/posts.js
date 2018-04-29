export default function posts(state = [], action){
    switch(action.type) {
        case '@@router/LOCATION_CHANGE':
            return [...state, action.payload, {hello: 'hello'}]
            break;
        case 'INCREMENT_LIKES' :
            console.log("incrementing likes");
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1)    
            ]
            break;
        default:
            return state;    
    }
}