import React from 'react';
import './../App.css';
import  {Jumbotron, Card} from 'react-bootstrap';
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
                <br />
                <div>
                    <Card className="text-white">
                        <Card.Img src={require('../images/education.jpg')} alt="Card Image" />
                        <Card.ImgOverlay>
                            <Card.Title>Education</Card.Title>
                            <Card.Text>Kansas State University | Computer Science | Mathematics minor</Card.Text>
                            <Card.Text>Graduated Magna Cum Laude | 3.91 GPA</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <br />
                <div>
                <Card className="text-white">
                        <Card.Img src={require('../images/experience.jpg')} alt="Card Image" />
                        <Card.ImgOverlay>
                            <Card.Title>Experience</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <br />
                <div>
                    <Card className="text-white">
                        <Card.Img src={require('../images/hobbies.jpg')} alt="Card Image" />
                        <Card.ImgOverlay>
                            <Card.Title>Hobbies</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Jumbotron>
        );
    }
}
export default AboutTab;