import React from 'react';
import './../App.css';
import  {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AboutTab extends React.Component{
    constructor(props){
        super(props);
        this.state = "";
    }

    render(){
        return(
            <Jumbotron>
                <h1>About</h1>
            </Jumbotron>
        );
    }
}
export default AboutTab;