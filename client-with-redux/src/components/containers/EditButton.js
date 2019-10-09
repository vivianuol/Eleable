import {fetchOneContact, updateOneContact} from '../../actions';
import EditButton from '../ui/EditButton';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => ({

    loadContactInfo: (id)=>  dispatch(fetchOneContact(id)),
    updateOneContact: (id, contact) =>  dispatch(
        updateOneContact(id, contact)
    )
    
    })


const Container = connect(null, mapDispatchToProps)(EditButton)

export default Container;