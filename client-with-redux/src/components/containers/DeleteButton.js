import {deleteOneContact} from '../../actions';
import DeleteButton from '../ui/DeleteButton';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        deleteContact(id){
            dispatch(
                deleteOneContact(id)
            )

        }
    }
}

const Container = connect(null, mapDispatchToProps)(DeleteButton)

export default Container;