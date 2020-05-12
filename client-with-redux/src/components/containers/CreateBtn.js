import {postOneAndfetchAll} from '../../actions';
import CreateBtn from '../ui/CreateBtn';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        postNewContact(data){
            dispatch(
                postOneAndfetchAll(data)
            )

        }
    }
}

const Container = connect(null, mapDispatchToProps)(CreateBtn)

export default Container;