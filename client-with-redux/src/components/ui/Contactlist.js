import React from 'react';
import ContactUnit from './ContactUnit';


class Contactlist extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
  
    componentDidMount() {
        const {loadContactlist} = this.props;
        loadContactlist();
        console.log('contactlist loaded.')
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(pending === false) return false;
        // more tests
        return true;
    }

    

    render() {
        const {contacts, error} = this.props;
        console.log(contacts); 
        console.log(error); 
         
        if(this.shouldComponentRender()) return (<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading ico" /> )   

        return (
            <div>
                {/* {error && <span className='product-list-error'>{error}</span>} */}
                {contacts.map((contact,id) => <ContactUnit key={id} id={id} contact={contact} />)}
            </div>
        )
    }
}

export default Contactlist;