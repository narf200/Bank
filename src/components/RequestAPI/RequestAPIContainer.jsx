import RequestAPI from "./RequestAPI";
import {connect} from "react-redux";
import {sendApikeyCreator, updateNewApiKeyCreator,} from "../../redux/RequestAPIReducer/RequestAPIReducer";


let mapStateToProps = (state) => {
    return{
        requestApiPage: state.requestApiPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendApikey: () => {
            dispatch(sendApikeyCreator())
        },
        updateNewApiKey: (body) => {
            dispatch(updateNewApiKeyCreator(body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPI)