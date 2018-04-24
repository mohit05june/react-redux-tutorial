function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state,{
                user: action.author,
                text: action.comment
            }]; 
            break;
        case 'REMOVE_COMMENT':
            return [
                // from start to one we want to delete
                ...state.slice(0,action.i),
                //after the delete to the end
                ...state.slice(action.i+1)
        ]; 
            break;
        default:
            return state;    
    }
}

export default function comments(state = [], action){
    if(typeof action.postId !== 'undefined') {
        return {
            // take current state
            ...state,
            //overwrite this post with new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}