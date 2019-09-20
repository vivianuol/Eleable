import { signupAccount } from '../../actions';
import Signup from '../ui/Signup';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    notice: state.notice
})

const mapDispatchToProps = dispatch => {
    return {
        onSignup(data){
            dispatch(
                signupAccount(data)
            )
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Signup);
     
export default Container;  