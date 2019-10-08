import React from "react";
import Navbar from "../components/containers/Logout";
// import    from '../components/AddNew';
import Contactlist from "../components/containers/Contactlist";


class Home extends React.Component {

    render () {
        return (
            <div >
                    <Navbar />
                    <Contactlist />
            </div>
        )
    }
}

export default Home;