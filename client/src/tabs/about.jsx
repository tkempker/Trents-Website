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
                            <Card.Text>BNSF Railway Software Developer Intern | Summer 2019</Card.Text>
                            <Card.Text>Kansas State Computer Science Research Developer | Sumemer 2018</Card.Text>
                            <Card.Text>Technologies/Languages: C#, Java, C, SQL, JavaScript, HTML 5, React, Angular, Node.js, GitHub</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <br />
                <div>
                    <Card className="text-white">
                        <Card.Img src={require('../images/hobbies.jpg')} alt="Card Image" />
                        <Card.ImgOverlay>
                            <Card.Title>Hobbies</Card.Title>
                            <Card.Text>Outdoor Activities (Hiking, Biking, etc.)</Card.Text>
                            <Card.Text>Playing/Watching Sports</Card.Text>
                            <Card.Text>Watching good movies/TV shows</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Jumbotron>
        );
    }
}
export default AboutTab;