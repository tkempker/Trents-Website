import React from 'react';
import './../App.css';
import  {Jumbotron, Card, CardGroup} from 'react-bootstrap';
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
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={require('../images/email.png')} />
                        <Card.Body>
                        <Card.Title>Email</Card.Title>
                        <Card.Text><a href="mailto:tjkempker@gmail.com">tjkempker@gmail.com</a></Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={require('../images/phone.png')} />
                        <Card.Body>
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>913-748-9397</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={require('../images/linkedin.png')} />
                        <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text><a href="https://www.linkedin.com/in/trent-kempker/" target="_blank">https://www.linkedin.com/in/trent-kempker/</a></Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={require('../images/github.png')} />
                        <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                        <Card.Text><a href="https://github.com/tkempker" target="_blank">https://github.com/tkempker</a></Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Jumbotron>
        );
    }
}
export default ContactTab;