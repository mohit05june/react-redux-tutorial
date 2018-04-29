export default function routeData(state = [], action){
    switch(action.type) {
        //case '@@router/LOCATION_CHANGE':
        //    return [...state, action.payload]
        // return state; 
        //    break;
        case 'LAST_lOCATION':
        return  action.path.pathname
            break;
        default:
            return state;    
    }
}