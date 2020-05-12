import {fetchContactsList} from '../../actions';
import Contactlist from '../ui/Contactlist';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    console.log("+++contacts: " + state.contacts.contacts.length)
    return ({
    contacts: state.contacts.contacts,
    pending: state.contacts.pending,
    error: state.contacts.error
})}

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