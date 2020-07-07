import React from 'react';
import './../App.css';
import  {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactTab extends React.Component{
    constructor(props){
        super(props);
        this.state = "";
    }

    render(){
        return(
            <Jumbotron>
                <h1>Contact</h1>
            </Jumbotron>
        );
    }
}
export default ContactTab;