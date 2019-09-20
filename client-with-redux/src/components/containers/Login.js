import {loginAccount} from '../../actions';
import Login from '../ui/Login';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user.user,
    pending: state.user.pending,
    error: state.user.error,
    notice: state.notice
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin(data){
            dispatch(
                loginAccount(data)
            )
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Container;