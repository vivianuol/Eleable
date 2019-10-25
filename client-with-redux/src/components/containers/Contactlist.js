import {fetchContactsList} from '../../actions';
import Contactlist from '../ui/Contactlist';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    username: state.user.user.email,
    contacts: state.contacts.contacts,
    pending: state.contacts.pending,
    error: state.contacts.error
})

const mapDispatchToProps = dispatch => {
    return {
        loadContactlist(){
            dispatch(
                fetchContactsList()
            )
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps
)(Contactlist);