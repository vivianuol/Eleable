import {deleteOneAndfetchAll} from '../../actions';
import DeleteButton from '../ui/DeleteButton';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        deleteContact(id){
            dispatch(
                deleteOneAndfetchAll(id)
            )

        }
    }
}

const Container = connect(null, mapDispatchToProps)(DeleteButton)

export default Container;