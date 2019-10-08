import {postOneContact} from '../../actions';
import CreateBtn from '../ui/CreateBtn';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        postNewContact(data){
            dispatch(
                postOneContact(data)
            )

        }
    }
}

const Container = connect(null, mapDispatchToProps)(CreateBtn)

export default Container;