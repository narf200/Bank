const UPDATE_API_KEY = 'UPDATE_API_KEY';
const SEND_NEW_API_KEY = 'SEND_NEW_API_KEY';

let initialState = {
    apiKeyState: [{id: 1, apiKey: 'Hi!'}],
    newApiKeyBodyState: ''
}

const RequestAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_API_KEY:
            return {
                ...state,
                newApiKeyBodyState: action.text
            }
        case  SEND_NEW_API_KEY:
            let body = state.newApiKeyBodyState
            return {
                ...state,
                apiKeyState: [ ...state.apiKeyState, {id: 2, apiKey: body}],
                newApiKeyBodyState: ''
            }
        default:
            return state;
    }

}

export const sendApikeyCreator = () => ({type: SEND_NEW_API_KEY})
export const updateNewApiKeyCreator = (body) => ({type: UPDATE_API_KEY, text: body})


export default RequestAPIReducer;