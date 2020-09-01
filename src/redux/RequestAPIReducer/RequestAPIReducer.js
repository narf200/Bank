const UPDATE_API_KEY = 'UPDATE_API_KEY';

let initialState = {
    newApiKeyBodyState: '',

}

const RequestAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_API_KEY:
            return {
                ...state,
                newApiKeyBodyState: action.text
            }
        default:
            return state;
    }

}

export const updateNewApiKeyCreator = (body) => ({type: UPDATE_API_KEY, text: body})


export default RequestAPIReducer;