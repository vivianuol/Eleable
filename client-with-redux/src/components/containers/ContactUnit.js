import {fetchOneContact} from '../../actions';
import ContactUnit from '../ui/ContactUnit';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        findTheContact(id){
            dispatch(
                fetchOneContact(id)
            )
        }
    }
}

const Container = connect(null,mapDispatchToProps
)(ContactUnit)

export default Container