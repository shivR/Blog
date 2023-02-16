import createDataContext from "./createDataContext";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            state = [...state, {title: `Blog Post ${state.length + 1}`}]
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'addBlogPost'})
    }    
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost}, [])