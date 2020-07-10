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
                <h4>Email: tjkempker@gmail.com</h4>
                <h4>Phone: 913-748-9397</h4>
                <h4>LinkedIn: <a href="https://www.linkedin.com/in/trent-kempker/" target="_blank">https://www.linkedin.com/in/trent-kempker/</a></h4>
                <h4>GitHub: <a href="https://github.com/tkempker" target="_blank">https://github.com/tkempker</a></h4>
            </Jumbotron>
        );
    }
}
export default ContactTab;