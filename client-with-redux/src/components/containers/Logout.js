import {logout} from '../../actions';
import Navbar from '../ui/Navbar';
import {connect}  from 'react-redux';

const mapStateToProps = state => (
    {
        loginStatus: state.user.isLogin,
        notice: state.notice
    }
)


const mapDispatchToProps = dispatch => {
    return {
        onLogout(){
            dispatch(
                logout()
            )
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default Container;