import {fetchContacts} from '../../actions';
import Contactlist from '../ui/Contactlist';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    pending: state.contacts.pending,
    error: state.contacts.error
})

const mapDispatchToProps = dispatch => {
    return {
        loadContactlist(){
            dispatch(
                fetchContacts()
            )
        }
    }
}

const Container = connect(mapStateToProps,mapDispatchToProps
)(Contactlist)

export default Container